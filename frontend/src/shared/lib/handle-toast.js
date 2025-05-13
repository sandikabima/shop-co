import { toast } from "sonner";

export const handleToast = {
    success: (message) => toast.success(message),
    error: (message)  => toast.error(message)
}
