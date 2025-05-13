export const handleError = (error) => {
    return (
      error?.response?.data?.message || error.message || "Something went wrong"
    );
  };
  
  
  export const handleApiError = (error) => {
    if (error.response) {
      const message =
        error.response.data?.message || "Terjadi kesalahan pada server.";
      toast.error(message);
    } else if (error.request) {
      toast.error("Tidak dapat terhubung ke server.");
    } else {
      toast.error("Terjadi kesalahan yang tidak diketahui.");
    }
  };