import React, { Component } from 'react';
import { createWord} from "../../actions/wordsActions";
import { connect } from "react-redux"

const initialState = {
  word: "",
  definition: "",
  sentence: "",
  category_id: 1
};

class NewWord extends Component {

  state = initialState;

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  resetForm = () => {
    this.setState(initialState)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let word = {...this.state};
    this.props.createWord(word)
      .then(response => {
        if (!response.error) {
          this.resetForm();
          this.props.history.push("/words");
        }
      })
  }

  render() {
    return (
      <div className="NewWord">
        <h4>New Word</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            name="word"
            placeholder="word"
            onChange={this.handleChange}
            value={this.state.word}
          /><br/>
          <input
            name="definition"
            placeholder="definition"
            onChange={this.handleChange}
            value={this.state.definition}
          /><br/>
          <input
            name="sentence"
            placeholder="sentence"
            onChange={this.handleChange}
            value={this.state.sentence}
          /><br/>
          <input type="submit" value="Add Word"/>
        </form>
      </div>
    );
  }

}

export default connect(null, { createWord })(NewWord);
