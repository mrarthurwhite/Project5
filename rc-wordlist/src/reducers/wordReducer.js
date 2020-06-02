const wordReducer = (state =
                          {
                              word: [],
                              loading: false },
                      action) => {

    switch(action.type) {
        case 'LOADING_A_WORD':
            console.log("wordReducer LOADING_A_WORD state" + state)
            console.log("wordReducer LOADING_A_WORD state.word" + state.word)
            return {
                ...state,
                word: [...state.word],
                loading: true
            }
        case 'A_WORD':
            console.log("wordReducer A_WORD action.words" + action.word)
            return {
                ...state,
                word: action.word,
                loading: false
            }
        default:
            return state;
    }
}

export default wordReducer;