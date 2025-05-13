import publicApi from "@/lib/publicApi";

const AuthService = {
    register: async (data) => {
        const response = await publicApi.post("/register", data)
        return response.data
    },
    login: async (data) => {
        const response = await publicApi.post("/login", data);
        return response.data
    },
    refreshToken: async () => {
        const response = await publicApi.get("/token");
        return response.data;
    },
    logout: async () => {
        const response = await publicApi.delete("/logout")
        return response.data
    }
}

export default AuthService