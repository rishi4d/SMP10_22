import { configureStore, createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: "post",
    initialState: {
        value: [],
    },
    reducers: {
        addPost: (state, action) => {
            console.log(action);
            state.value.push(action.payload);
            console.log(state);
        },
        addAllPost: (state, action) => {}
    },
});

export const action = postSlice.actions;

export const selectPost = (state) => {
    console.log(state);
    return state.value;
};

const store = configureStore({
    reducer: postSlice.reducer
});

export default store;