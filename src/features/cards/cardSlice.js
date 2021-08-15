import {createSlice} from '@reduxjs/toolkit';

export const cardSlice = createSlice({
    name:'cards',
    initialState: {
       cards: {

       } 
    },
    reducers:{
        addCard:(state,action) => {
            const {id,front,back} = action.payload;

            state.cards[id] = {
                id:id,
                front:front,
                back:back
            }

        }
    }
});

export const selectCard = (state) => {return state.cards.cards};
export const {addCard} = cardSlice.actions;
export default cardSlice.reducer;