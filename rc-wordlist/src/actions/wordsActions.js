export const addWord = word => ({ type: "ADD_WORD", word })

export const fetchAllWords = () => {
    console.log("inside fetchAllWords " )

    return (dispatch) => {
        dispatch({ type: 'LOADING_ALL_WORDS'})
        fetch('http://localhost:4000/words')
            .then(response => {
                return response.json()})
            .then(responseJSON => {
                console.log("inside then then fetchAllWords " + responseJSON);
                dispatch({ type: 'ALL_WORDS', words: responseJSON })
            })
    }
}
export const createWord = (word) => {
    return dispatch => {
        let body = {word};
        console.log("inside createWord  body " + body);
        return fetch("http://localhost:4000/words", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        }).then(r => r.json())
            .then(newWord => {
                console.log("success! w/ createWord  then then newWord " + newWord);
                // now add the word to global state variable of app
                dispatch(addWord(newWord));
                return newWord;
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