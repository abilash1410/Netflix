import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'userSlice',
    initialState:{
        loggedInUser:null,
        profileUsers:[],
    },
    reducers:{
        addUser:(state,action) =>{
            state.loggedInUser =  action.payload;
        },
        removeUser:(state,action) =>{
            state.loggedInUser =  null;
        },
        addProfileUsers:(state,action) => {
            state.profileUsers.push(action.payload);
        },
        removeProfileUsers: (state,action) => {
            state.profileUsers = [];
        }
    }
})

export const {addUser,removeUser,addProfileUsers,removeProfileUsers} = userSlice.actions;
export default userSlice.reducer;