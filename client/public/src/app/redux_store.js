import { configureStore, createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "post",
    initialState: {
        value: [],
    },
    reducers: {
        addPost: (state, action) => {
            state.value.push(action.payload);
        },
        addAllPost: (state, action) => {},
    },
})

export const action = postSlice.actions;

export const selectPost = (state) => state.post.value;

const store = configureStore({
    reducer: postSlice.reducer
});

export default store;