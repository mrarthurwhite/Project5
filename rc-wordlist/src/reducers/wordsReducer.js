const wordsReducer = (state =
                          {
                            words: [],
                            loading: false },
                      action) => {
    console.log("wordsReducer type " + action.type)
    switch(action.type) {
        case 'LOADING_ALL_WORDS':
            return {
                ...state,
                words: [...state.words],
                loading: true
            }
        case 'ALL_WORDS':
            return {
                ...state,
                words: action.words,
                loading: false
            }
        case 'ADD_WORD':
            return {
                ...state,
                words: [...state.words, action.word],
                loading: false
            };
        default:
            return state;
    }
}

export default wordsReducer;