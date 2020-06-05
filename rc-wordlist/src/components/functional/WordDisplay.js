import React, { Component } from 'react';
import {activateWord} from "../../actions/wordAction";
import {connect} from "react-redux";

class WordDisplay extends Component {


    findWord= ()=>{
        let wrd = this.props.words.find(w => w.id == this.props.match.params.wordId);
        if (wrd) {
            console.log("going to display wrd " + (wrd?wrd.word: "undef"));
            this.props.activateWord(wrd);
        }
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

const mapDispatchToProps = dispatch => {
    console.log("wordDisplay.js: mapDispatchToProps  " );
    //debugger;
    return {activateWord: (w) => dispatch(activateWord(w))}
}

export default connect(null, mapDispatchToProps)(WordDisplay)