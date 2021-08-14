import {createSlice} from '@reduxjs/toolkit';
import {addQuizId} from '../topics/topicsSlice';
//import {useDispatch} from 'react-redux';
//const dispatch = useDispatch();
export const quizSlice = createSlice(
    {
        name:'quizzes',
        initialState:{
            quizzes:{
            }
        },
        reducers:{
            addQuiz:(state,action) => {
                const {id,name,topicId,cardIds} = action.payload;
                state.quizzes[id] = {
                    id: id,
                    name: name,
                    topicId: topicId,
                    cardIds: cardIds
                }
            }
        }
    }
)
export const thunkActionCreator = (payload) => {
    const {name,topicId,cardIds,id} = payload;
    return (dispatch) => {
      // dispatch multiple actions here
      dispatch(addQuiz({id,name,topicId,cardIds}));
      dispatch(addQuizId({quizId:id,topicId:topicId}));

    };
};


export const selectQuiz = (state) => {return state.quizzes.quizzes};
export const {addQuiz} = quizSlice.actions;
export default quizSlice.reducer;
