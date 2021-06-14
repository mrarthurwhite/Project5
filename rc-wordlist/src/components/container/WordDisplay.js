import React, { Component } from 'react';
import {activateWord} from "../../actions/wordAction";
import {connect} from "react-redux";
import {fetchAWord} from "../../actions/wordFetchAction";

class WordDisplay extends Component {

    componentDidMount() {
        this.props.pfetchAWord(this.props.match.params.wordId)
    }

    componentDidUpdate(prevProps) {
        this.tryToFetchWord(prevProps);
    }

    tryToFetchWord(prevProps) {
        let newId = (parseInt(prevProps.match.params.wordId) !== parseInt(this.props.match.params.wordId));
        if (newId && !this.props.ploading) {
            //debugger;
            console.log(">>WordDisplay.js.componentDidUpdate wordId: " + this.props.match.params.wordId);
            this.props.pfetchAWord(this.props.match.params.wordId)
        }
    }

    findWord= ()=>{
        let pwrd = this.props.pword;//this.props.words.find(w => w.id == this.props.match.params.wordId);
        //console.log(">>>WordDisplay.js this.props.pword " + this.props.pword);
        if (pwrd) {
            //console.log(" WordDisplay.js going to display pwrd " + (pwrd?pwrd.pwrd: "undef"));
            this.props.pactivateWord(pwrd);
        }
        return (
            pwrd? <div className="word">
                <p className="text-danger">Word definition</p>
                <p><i>{pwrd.word}</i></p>
                <p><b>Definition:</b> {pwrd.definition}</p>
                <p><b>Sentence:</b> {pwrd.sentence}</p>
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
   // console.log("WordDisplay.js: mapStateToProps state " + state ) ;
    //debugger;
    let pwrd ="";
    if (state.fetchAWordReducer) {
        pwrd = state.fetchAWordReducer.word;
        //console.log("WordDisplay.js: mapStateToProps pwrd " + pwrd ) ;
    }

    return {
        pword: pwrd,
        ploading: state.fetchAWordReducer.loading
    }
}

const mapDispatchToProps = dispatch => {
    //console.log("wordDisplay.js: mapDispatchToProps  " );
    //debugger;
    return {
        pfetchAWord: (wordId) => dispatch(fetchAWord(wordId)),
        pactivateWord: (w) => dispatch(activateWord(w))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordDisplay)