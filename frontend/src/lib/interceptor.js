export const setupInterceptors = (api, store) => {
    let isRefreshing = false;
    let failedQueue = [];
  
    const processQueue = (error, token = null) => {
      failedQueue.forEach((prom) => {
        if (error) {
          prom.reject(error);
        } else {
          prom.resolve(token);
        }
      });
      failedQueue = [];
    };
  
    api.interceptors.request.use((config) => {
      const token = store.getState().auth?.user?.accessToken;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  
    api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
  
        if (
          error.response?.status === 401 &&
          !originalRequest._retry &&
          !originalRequest.url.includes("/token")
        ) {
          if (isRefreshing) {
            return new Promise((resolve, reject) => {
              failedQueue.push({
                resolve: (token) => {
                  originalRequest.headers.Authorization = `Bearer ${token}`;
                  resolve(api(originalRequest));
                },
                reject: (err) => reject(err),
              });
            });
          }
  
          originalRequest._retry = true;
          isRefreshing = true;
  
          try {
            const { refreshToken } = await import("@/store/auth/authThunk");
            const res = await store.dispatch(refreshToken()).unwrap();
            const newAccessToken = res.user.accessToken;
  
            processQueue(null, newAccessToken);
  
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return api(originalRequest);
          } catch (err) {
            processQueue(err, null);
            return Promise.reject(err);
          } finally {
            isRefreshing = false;
          }
        }
  
        return Promise.reject(error);
      }
    );
  };
  