import { createSlice } from "@reduxjs/toolkit";

const AppConfigSlice = createSlice({
    name:'AppConfigSlice',
    initialState:{
        getPreferredLang:'English',
    },
    reducers: {
        setPreferredLang : (state,action) => {
            state.getPreferredLang = action.payload;
        }
    }
});

export const {setPreferredLang} = AppConfigSlice.actions;
export default AppConfigSlice.reducer;