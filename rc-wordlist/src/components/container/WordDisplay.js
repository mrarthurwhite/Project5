import React, { Component } from 'react';
import {activateWord} from "../../actions/wordAction";
import {connect} from "react-redux";
import {fetchAWord} from "../../actions/wordFetchAction";

class WordDisplay extends Component {

    componentDidMount() {
        // debugger;
        console.log(" WordDisplay.js componentDidMount : " +this.props.match.params.wordId);
        this.props.fetchAWord(this.props.match.params.wordId)

    }

    findWord= ()=>{
        let wrd = this.props.words.find(w => w.id == this.props.match.params.wordId);
        console.log("WordDisplay.js this.props.word " + this.props.word);
        if (wrd) {
            console.log(" WordDisplay.js going to display wrd " + (wrd?wrd.word: "undef"));
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

const mapStateToProps = state => {
    console.log("WordDisplay.js: mapStateToProps state " + state ) ;
    //debugger;
    let wrd ="";
    if (state.fetchAWordReducer) {
        wrd = state.fetchAWordReducer.word;
        console.log("WordDisplay.js: mapStateToProps wrd " + wrd ) ;
    }

    return {
        word: wrd
    }
}

const mapDispatchToProps = dispatch => {
    console.log("wordDisplay.js: mapDispatchToProps  " );
    //debugger;
    return {
        fetchAWord: (wordId) => dispatch(fetchAWord(wordId)),
        activateWord: (w) => dispatch(activateWord(w))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordDisplay)