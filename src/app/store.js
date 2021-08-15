import { configureStore } from "@reduxjs/toolkit";
import {topicsSlice} from "../features/topics/topicsSlice";
import {quizSlice} from "../features/quizzes/quizSlice";
import {cardSlice} from "../features/cards/cardSlice";

export default configureStore({
  reducer: {
    topics: topicsSlice.reducer,
    quizzes: quizSlice.reducer,
    cards: cardSlice.reducer
  },
});
