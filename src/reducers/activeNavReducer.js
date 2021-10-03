export const initialState={
    active:false,
    questions:[]
}

const activeNavReducer=(state, action)=> { 
    switch (action.type) {
      case 'SET_ACTIVE':
        return {
            ...state, 
            active:!state.active
        }
      case 'LINK_CLICKED':
        return {
            ...state, 
            active:false
        }
      case 'INIT_STATE':
        return initialState
  default:
    throw new Error('ERROR - Refer to Reducer')
}   
}

export default activeNavReducer
