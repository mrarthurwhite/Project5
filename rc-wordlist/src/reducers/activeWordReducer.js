const activeWordReducer = (state =
                          {
                              wordId: [],
                              active: false },
                           action) => {

    switch(action.type) {
        case 'ACTIVATE_WORD':
            console.log("activeWordReducer ACTIVATE_WORD : " + action.word)
            return {
                ...state,
                wordId: action.word.id,
                active: true
            }
        default:
            return state;
    }
}

export default activeWordReducer;