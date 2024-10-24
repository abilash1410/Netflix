import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice';
import moviesSlice from './moviesSlice';
import GPTSlice from './GPTSlice';
import AppConfigSlice from './AppConfigSlice';

const appStore = configureStore({

    reducer:{
        user:userSlice,
        moviesNow:moviesSlice,
        GPT:GPTSlice,
        AppConfig:AppConfigSlice,
    }
})

export default appStore;