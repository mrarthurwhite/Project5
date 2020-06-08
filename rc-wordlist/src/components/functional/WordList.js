import React, { Component } from 'react';
import Word from '../container/Word';

export default class WordList extends Component {

    listOfWords = () => {
        return this.props.words.map((w,i) => {
            return <Word key={i} word={w} />
        })
    }

    render() {
        return (
            <div>
                {this.listOfWords()}
            </div>
        );
    }
}
