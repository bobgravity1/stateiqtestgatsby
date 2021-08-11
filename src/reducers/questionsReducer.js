import {deckShuffled} from '../questions/questionList'

let deck=deckShuffled
export const deckInitialState={
    deck,
    correct:{
        spatial:[],
        logic:[],
        reason:[]
    },
    question:deck.splice(-1,1),
}

const questionsReducer=(state, action)=>{
    switch(action.type){
        case 'NEXT_QUESTION':
            return {
            ...state,
            // we use concat instead of push because push
            //returns the length of the new array. we need to return
            //the mutated array. (splice vs. slice, foreach vs. map)
            question:state.deck.splice(-1,1),
        }
}
}
export default questionsReducer;