import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../Api";

export const currentWeather = createAsyncThunk('weather/cWeather',
    async (body, thunkAPI) => {

        try {
            const data = await apiService.getWeather(body.lat, body.lon)
            return data.data
        } catch (error) {
            const message =
                (error.response &&
                    "Something went wrong" &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            console.log(message)


        }
    }
)

export const currentWeatherCity = createAsyncThunk('weather/cityWeather',
    async (body, thunkAPI) => {

        try {
            const data = await apiService.getWeatherCity(body.city)
            return data.data
        } catch (error) {
            const message =
                (error.response &&
                    "Something went wrong" &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            console.log(message)


        }
    }
)

export const currentWeatherSlice = createSlice({
    name: 'weather',
    initialState: {
        data: null,
        status: 'idle',
        error: null,

    },
    extraReducers: {
        [currentWeather.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.data = action.payload.data[0];
        },
        [currentWeather.rejected]: (state, action) => {
            state.status = "failed";
        },
        [currentWeather.pending]: (state, action) => {
            state.status = "loading";
        },
        [currentWeatherCity.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.data = action.payload.data[0];
        },
        [currentWeatherCity.rejected]: (state, action) => {
            state.status = "failed";
        },
        [currentWeatherCity.pending]: (state, action) => {
            state.status = "loading";
        },
    },
})

export default currentWeatherSlice.reducer