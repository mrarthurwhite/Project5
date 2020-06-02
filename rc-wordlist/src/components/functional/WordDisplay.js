import React, { Component } from 'react';


export default class WordDisplay extends Component {


    findWord= ()=>{
        let wrd = this.props.words.find(w => w.id == this.props.match.params.wordId);
        console.log("going to display wrd " + (wrd?wrd.word: "undef"));
        return (
            wrd? <div className="word">
                <p className="text-danger">Word definition</p>
                <p><i>{wrd.word}</i></p>
                <p><b>Definition:</b> {wrd.definition}</p>
                <p><b>Sentence:</b> {wrd.sentence}</p>
            </div> : <h3>...</h3>
        );
    }
    

    render() {
        //debugger;
        return (
            (this.props.words)? this.findWord() : <h3>...</h3>
        )


    }

}


