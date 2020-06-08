export const fetchAWord = (wordId) => {
    let url = "http://localhost:4000/words/" + wordId;
    console.log("**** wordFetchAction.js inside "  + url ) ;
    return (dispatch) => {
        dispatch({ type: 'LOADING_A_WORD'})
        fetch(url)
            .then(response => {
                console.log("wordFetchAction.js then response.json() " ) ;
                    return response.json()})
            .then(responseJSON => {
                console.log("**** wordFetchAction.js then then responseJSON " + responseJSON ) ;
                debugger;
                dispatch({ type: 'A_WORD', word: responseJSON })
        })
    }
}

/*
just json gets me an array
json[0] gets the first element
json[0].id
json[0].word
json[0].definition
json[0].sentence

0: {id: 1,
    word: "abase",
    definition: "Lower ; humiliate.",
    sentence: "Defeated, Queen Zenobia was forced to abase hersel…mperor in the procession celebrating his triumph.",
    category_id: 1, …}
    category: {name: "3,500 Basic"}
*
* */