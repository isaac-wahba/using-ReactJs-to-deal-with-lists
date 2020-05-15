import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent";
import CharComponent from "./CharComponent";

export default class App extends Component {
  state = {
    content: [],
    length: 0,
  };

  letterDeleteHandler = (letterIndex) => {
    const lettersArray = [...this.state.content];
    lettersArray.splice(letterIndex, 1);
    this.setState({
      content: lettersArray,
    });
  };
  stringHandler = (event) => {
    const contentArray = [...event.target.value];

    this.setState({
      content: contentArray,
      length: contentArray.length,
    });
  };

  render() {
    const renderLetter = this.state.content.map((letter, index) => {
      return (
        <CharComponent
          letter={letter}
          key={index}
          click={() => this.letterDeleteHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <p>Rendering lists: Task</p>
        <input
          type="text"
          onChange={(event) => {
            this.stringHandler(event);
          }}
          value={this.state.content}
        />
        {renderLetter}
        <ValidationComponent howLong={this.state.length} />
      </div>
    );
  }
}
