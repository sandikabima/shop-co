import AuthService from "@/services/authService";
import { handleError } from "@/shared/lib/handle-error";
import { handleToast } from "@/shared/lib/handle-toast";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const register = createAsyncThunk(
    "auth/register",

    async (data, thunkAPI) => {
        try {
            const response = await AuthService.register(data)
            return response
        } catch (error) {
            handleToast.error(handleError(error));
            return thunkAPI.rejectWithValue(handleError(error));
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",

    async (data, thunkAPI) => {
        try {
            const response = await AuthService.login(data)
            return response
        } catch (error) {
            handleToast.error(handleError(error));
            return thunkAPI.rejectWithValue(handleError(error));
        }
    }
)

export const refreshToken = createAsyncThunk(
    "auth/refreshToken",

    async (_, thunkAPI) => {
        try {
            const response = await AuthService.refreshToken()
            return response
        } catch (error) {
            handleToast.error(handleError(error));
            return thunkAPI.rejectWithValue(handleError(error));
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",

    async (_, thunkAPI) => {
        try {
            const response = await AuthService.logout()
            return response
        } catch (error) {
            handleToast.error(handleError(error));
            return thunkAPI.rejectWithValue(handleError(error));
        }
    }
)