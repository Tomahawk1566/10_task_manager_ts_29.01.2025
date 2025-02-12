import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../redux/taskSlice';
import userReducer from '../redux/userSlice';
import commentsReducer from "../redux/commentSlice";

const store = configureStore({
    reducer: {
        todo: taskReducer,
        person: userReducer,
        comments: commentsReducer,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
