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
      squares: [],
      grid_count:0,
      sty:{width:0}
    }
  }

  handleScand(){
    const squares = this.state.squares.slice();

    let baseState,
    nextOne,preOne,upOne,lUpOne,rUpOne,downOne,lDownOne,rDownOne = null
    let count = 0
    let grid_count = this.state.grid_count

    for(let item = 0; item<squares.length; item++){
      count = 0
      baseState = squares[item]
      nextOne = squares[item+1]
      preOne = squares[item-1]
      upOne = squares[item-grid_count]
      lUpOne = squares[item-grid_count-1]
      rUpOne = squares[item-grid_count+1]
      downOne = squares[item+grid_count]
      lDownOne = squares[item+grid_count-1]
      rDownOne = squares[item+grid_count+1]
      console.log('rD:',rDownOne);

      if(nextOne != null && nextOne != undefined){
        count++
      }
      if(preOne != null && preOne != undefined){
        count++
      }
      if(upOne != null && upOne != undefined){
        count++
      }
      if(lUpOne != null && lUpOne != undefined){
        count++
      }
      if(rUpOne != null && rUpOne != undefined){
        count++
      }
      if(downOne != null && downOne != undefined){
        count++
      }
      if(lDownOne != null && lDownOne != undefined){
        count++
      }
      if(rDownOne != null && rDownOne != undefined){
        count++
      }

      if(baseState == null){
        console.log('nullCell',item);
        if(count >=3){
          squares[item] = 'X'
        }
      } else {
        console.log('aliveCell',item);
        if(count<2 || count>3){
          squares[item] = null
        } else if(count == 2 || count ==3){
          squares[item] = 'X'
        }
      }
      console.log(count);
    }
    this.setState({squares:squares})
  }
  handleClick(i) {
   const squares = this.state.squares.slice();
   squares[i] = 'X'
   this.setState({squares:squares})
 }
  initBoard(w,h){
    var grid = w*15-(w-1)
    this.setState({grid_count:w})
    this.setState({squares:Array(w*h).fill(null),sty:{width:grid+'px'}})
  }

  render() {
    let square = this.state.squares.map((x,index) => <Square
                                                        key={index}
                                                        value={x}
                                                        onClick={() => this.handleClick(index)}/>)
    return (
      <div>
        <div className="board-row" style={this.state.sty}>
         {square}
        </div>
        <div className="btnWrap">
          <button onClick={this.initBoard.bind(this,50,30)}>Size:50*30</button>
          <button onClick={this.initBoard.bind(this,70,50)}>Size:70*50</button>
          <button onClick={this.initBoard.bind(this,100,80)}>Size:100*80</button>
          <button onClick={this.initBoard.bind(this,5,5)}>Size:5*5</button>
        </div>
        <div>
          <button onClick={this.handleScand.bind(this)}>测试</button>
        </div>
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
