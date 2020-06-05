const wordReducer = (state =
                          {
                              wordId: [],
                              active: false },
                      action) => {

    switch(action.type) {
        case 'ACTIVATE_WORD':
            console.log("wordReducer ACTIVATE_WORD : " + action.word)
            return {
                ...state,
                wordId: action.word.id,
                active: true
            }
        default:
            return state;
    }
}

export default wordReducer;