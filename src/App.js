import React from 'react';
import './App.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(){
    super()
    this.state = {
      count:0,
      squares: [null,'X',null,null,null,null,null,null,null ],
      xIsNext:true
    }
  }

  handleScand(){
    console.log(this);
    // this.setState({count:0})
    //
    // let nextOne = squares[i+1]
    // let preOne = squares[i-1]
    // let upOne = squares[i-3]
    // let downOne = squares[i+3]
    //
    // if(nextOne != null){
    //   this.setState({count:this.state.count++})
    // }
    // if(preOne != null){
    //   this.setState({count:this.state.count++})
    // }
    // if(upOne != null){
    //   this.setState({count:this.state.count++})
    // }
    // if(downOne != null){
    //   this.setState({count:this.state.count++})
    // }
    //  // squares = this.state.squares.slice();
    //  console.log(squares[i]);
    // if(this.state.count<2){
    //   squares[i] = null
    // } else if(this.state.count == 2 || this.state.count ==3){
    //   return
    // } else if(this.state.count >3){
    //   squares[i] = null
    // }
    // this.setState({squares:squares})
    // console.log(this.state.count);
  }
  handleClick(i) {
   const squares = this.state.squares.slice();
   squares[i] = 'X'
   this.setState({squares:squares})
 }
  renderSquare(i) {
    return (
      <Square
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}/>
    )
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <button onClick={this.handleScand.bind(this)}>测试</button>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}


export default Game;
