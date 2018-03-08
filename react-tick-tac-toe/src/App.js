import React, { Component } from "react";
import "./App.css";
import Row from "./Row";

class App extends Component {
  constructor() {
    super();
    this.state = {
      boardState: [
        { id: 0, st: null },
        { id: 1, st: null },
        { id: 2, st: null },
        { id: 3, st: null },
        { id: 4, st: null },
        { id: 5, st: null },
        { id: 6, st: null },
        { id: 7, st: null },
        { id: 8, st: null }
      ],
      turn: "X",
      message: ""
    };
  }

  changeTurn = () => {
    const upNext = this.state.turn === "X" ? "O" : "X";
    this.setState({ turn: upNext });
  };

  handleSquareClick = id => {
    console.log(`${id} clicked`);
    const { boardState } = this.state;
    
    // check if square has already been played
    if(!boardState[id].st) {
      this.setState({message: "That square has already been played"})
      return;
    }
    
  };

  render() {
    const { boardState } = this.state;
    const dataByRows = [
      boardState.slice(0, 3),
      boardState.slice(3, 6),
      boardState.slice(6)
    ];
    return (
      <div className="App">
        <table>
          <tbody>
            {dataByRows.map((rowData, i) => (
              <Row
                key={i}
                rowData={rowData}
                handleSquareClick={this.handleSquareClick}
              />
            ))}
          </tbody>
        </table>
        <p>It's currently {this.state.turn}'s turn</p>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
