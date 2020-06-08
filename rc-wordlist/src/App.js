import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route} from "react-router-dom";
import { fetchAllWords } from './actions/wordsActions'
import WordList from './components/functional/WordList';
import WordDisplay  from "./components/container/WordDisplay";
import NavBar from "./components/functional/NavBar";
import Home from "./components/functional/Home";
import NewWord from "./components/container/NewWord";
import BeginningInstructions from "./components/functional/BeginningInstructions";

class App extends Component {
    componentDidMount() {
        console.log("componentdidMount this.props "+this.props)
        this.props.fetchAllWords()
    }
    render() {
        console.log("render this.props.words "+this.props.words)
        //debugger;
        return (
            <div className="row" id="overall">
                <table id="application_table">
                    <tbody>
                    <tr>
                        <td colSpan={2} align={"center"} >
                            <Route path="/" component={Home}/>
                            <NavBar/>
                            <Route exact path="/" component={BeginningInstructions}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Route
                                path= '/words/'
                                render={ rp=> <WordList {...rp} words={this.props.words}/>}
                            />
                            </td>
                        <td>
                            <Route
                                path= '/words/:wordId'
                                render={(rp) => <WordDisplay {...rp} words={this.props.words}/>}
                            />
                            <Route exact path="/words/new" component={NewWord}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = state => {
    console.log("App.js mapstatetoprops state.wordsReducer.words" + state.wordsReducer.words)
    //debugger;
    return {
        words: state.wordsReducer.words,
        loading: state.wordsReducer.loading
    }
}
const mapDispatchToProps = dispatch => {
    console.log("App.js: mapDispatchToProps  " );
    //debugger;
    return {fetchAllWords: () => dispatch(fetchAllWords())}
}
export default connect(mapStateToProps, mapDispatchToProps)(App)