import React, { Component } from 'react';
import {Link}  from 'react-router-dom';
import {connect} from "react-redux";

class Word extends Component {

    displayAsterisk= ()=> {
        if (this.props.word.id== this.props.wordId) {
            console.log("Word.js displayAsterisk word" + this.props.word.word);
            console.log("Word.js displayAsterisk wordId" + this.props.wordId);
            return "*";
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
    console.log("Word.js mapstatetoprops state.wordReducer.wordId" + state.wordReducer.wordId);
    //debugger;
    return {
        wordId: state.wordReducer.wordId,
        active: state.wordReducer.active
    }
}

export default connect(mapStateToProps, null)(Word)