import React, { Component } from 'react';
import {Link}  from 'react-router-dom';
import {connect} from "react-redux";
import HighlightWord from "../functional/HighlightWord";

class Word extends Component {

    displayAsterisk= ()=> {
        if (this.props.word.id== this.props.pwordId) {
           // console.log("Word.js displayAsterisk word " + this.props.word.word);
           // console.log("Word.js displayAsterisk wordId " + this.props.pwordId);
            return (<HighlightWord/>);
        }else {
            return "";
        }
    }


    render() {
        return (
            <div className="word" id={this.props.word.id}>
                <Link
                    key={this.props.word.id}
                    to={`/words/${this.props.word.id}`}
                >
                    {this.props.word.word} {this.displayAsterisk()}
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    //console.log("Word.js mapstatetoprops state.activeWordReducer.wordId " + state.activeWordReducer.wordId);
    //debugger;
    return {
        pwordId: state.activeWordReducer.wordId,
        pactive: state.activeWordReducer.active
    }
}

export default connect(mapStateToProps, null)(Word)