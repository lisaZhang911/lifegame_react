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
      generator:0,
      grid_count:0,
      grid_total:1500,
      sty:{width:0}
    }
  }
   test(){
    setTimeout(() => {
      this.handleScand()
      this.test()
    },200)
  }
   test1() {
    console.log('ss');

  }
  handleScand(){
    const squares = this.state.squares.slice();
    let generator = this.state.generator
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
        if(count ==3){
          squares[item] = 'X'
        }
      } else {
        if(count<2 || count>3){
          squares[item] = null
        } else if(count == 2 || count ==3){
          continue;
        }
      }
    }
    generator++

    this.setState({squares:squares,generator:generator})
    // this.handleScand()
  }
  handleClick(i) {
   const squares = this.state.squares.slice();
   squares[i] = 'X'
   this.setState({squares:squares})
 }
  setBoard(w,h){
    var grid = w*15-(w-1)
    this.setState({grid_count:w,grid_total:w*h})
    this.setState({squares:Array(w*h).fill(null),sty:{width:grid+'px'}})
  }
  initBoar(){
    var grid = this.state.grid_total
    var squares = []
    for(var i=0;i<grid;i++){
      if(Math.round(Math.random()*2)==2){
        squares[i] = 'X'
      } else {
        squares[i] = null
      }
    }
    this.setState({squares:squares,grid_count:50})
    this.setState({sty:{width:50*15-49+'px'}})
  }
  componentDidMount(){
    // this.setBoard(50,30)
    this.initBoar()
  }
  render() {
    let square = this.state.squares.map((x,index) => <Square
                                                        key={index}
                                                        value={x}
                                                        onClick={() => this.handleClick(index)}/>)
    let gene = this.state.generator
    return (
      <div>
        <p>generator:{gene}</p>
        <div className="board-row" style={this.state.sty}>
         {square}
        </div>
        <div className="btnWrap">
          <button onClick={this.setBoard.bind(this,50,30)}>Size:50*30</button>
          <button onClick={this.setBoard.bind(this,70,50)}>Size:70*50</button>
          <button onClick={this.setBoard.bind(this,100,80)}>Size:100*80</button>
          <button onClick={this.setBoard.bind(this,10,10)}>Size:10*10</button>
        </div>
        <div>
          <button onClick={this.test.bind(this)}>测试</button>
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
