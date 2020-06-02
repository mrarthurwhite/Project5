import React, { Component } from 'react';
import {Link}  from 'react-router-dom';
export default class Word extends Component {



    render() {
        return (
            <div className="word" id={this.props.word.id}>
                <Link
                    key={this.props.word.id}
                    to={`/words/${this.props.word.id}`}
                >
                    {this.props.word.word}
                </Link>
            </div>
        );
    }
}