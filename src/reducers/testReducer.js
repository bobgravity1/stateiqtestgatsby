import {deckShuffled} from '../questions/questionList'

let deck=deckShuffled
export const deckInitialState={
    deck,
    correct:[],
    score:70,
    answer:'',
    question:deck.splice(-1,1),
    index:1
}

const testReducer=(state, action)=>{
    switch(action.type){
        case 'INIT_STATE':
            return {
            deck,
            correct:[],
            score:70,
            answer:'',
            question:deck.splice(-1,1),
            index:1
                }
        case 'NEXT_QUESTION':
            return {
            ...state,
            // we use concat instead of push because push
            //returns the length of the new array. we need to return
            //the mutated array. (splice vs. slice, foreach vs. map)
            question:state.deck.splice(-1,1),
            answer:'',
            index:state.index+1
        }
        case 'CURRENT_ANSWER':
            return {
                ...state, 
                answer:action.payload.answer
            } 
        case 'SUBMIT_ANSWER':
            if(action.payload.answer===state.question[0].answer){
                return {
                    ...state,
                    score:state.score+3,
                    correct:state.correct.concat(state.question)
                } 
            }
            else{
                return{
                    ...state
                }
            }  
            default:
                return{
                    ...state
                };
}

    
}
export default testReducer;