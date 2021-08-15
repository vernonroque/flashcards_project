import {createSlice} from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {

        }
    },
    reducers: {
        addTopic: (state,action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            }
        },
        addQuizId: (state,action) => {
            const {quizId, topicId} = action.payload;
            //console.log(quizId);
            //console.log(topicId);
            state.topics[topicId].quizIds.push(quizId);
        }
    }
    
    }
)
export const selectTopic = (state) => state.topics.topics;
export const {addTopic, addQuizId} = topicsSlice.actions;
export default topicsSlice.reducer;
