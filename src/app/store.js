import { configureStore } from "@reduxjs/toolkit";
import {topicsSlice} from "../features/topics/topicsSlice";
import {quizSlice} from "../features/quizzes/quizSlice";

export default configureStore({
  reducer: {
    topics: topicsSlice.reducer,
    quizzes: quizSlice.reducer
  },
});
