const fetchAWordReducer  = (state =
                          {
                              word: [],
                              loading: false },
                      action) => {
    console.log("fetchAWordReducer type " + action.type)
    switch(action.type) {
        case 'LOADING_A_WORD':
            return {
                ...state,
                word:state.word,
                loading: true
            }
        case 'A_WORD':
            return {
                ...state,
                word: action.word,
                loading: false
            }
        default:
            return state;
    }
}

export default fetchAWordReducer ;
