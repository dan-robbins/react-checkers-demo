import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BoardSquare from './BoardSquare'
import registerServiceWorker from './registerServiceWorker';

class CheckersGame extends Component{
    constructor(props){
        super(props)
        this.pickedUpFrom = this.pickedUpFrom.bind(this)
        this.movedPiece = this.movedPiece.bind(this)
        this.didMovePiece = this.didMovePiece.bind(this)
        this.didMoveFrom = this.didMoveFrom.bind(this)
        this.pieceMoved = false
    }

    pickedUpFrom(x,y){
        this.pickedX = x
        this.pickedY = y
    }

    movedPiece(moved){
        this.pieceMoved = moved
    }

    didMovePiece(){
        return this.pieceMoved
    }

    didMoveFrom(x, y){
        return this.pickedX === x && this.pickedY === y
    }

    render(){
        let boardSize = 8
        let board = [];
        for(let i = 0; i < boardSize; i++){
            board[i] = [];
            board[i][boardSize]=<br/>
        }
        for(let i = 0; i < boardSize; i++){
            for(let j = 0; j < boardSize; j++){
                if(i%2===0 && j%2===0){
                    board[i][j] = <BoardSquare key={''+i+j} color='#e5e5e5' x={i} y={j} hasChecker={false} pickedUpFrom={this.pickedUpFrom} movedPiece={this.movedPiece} didMovePiece={this.didMovePiece} didMoveFrom={this.didMoveFrom}/>
                }
                else if(i%2===0 && j%2===1){
                    if(i<3 || i>4){
                        board[i][j] = <BoardSquare key={''+i+j} color='#303030' x={i} y={j} hasChecker={true} pickedUpFrom={this.pickedUpFrom} movedPiece={this.movedPiece} didMovePiece={this.didMovePiece} didMoveFrom={this.didMoveFrom}/>
                    }
                    else{
                        board[i][j] = <BoardSquare key={''+i+j} color='#303030' x={i} y={j} hasChecker={false} pickedUpFrom={this.pickedUpFrom} movedPiece={this.movedPiece} didMovePiece={this.didMovePiece} didMoveFrom={this.didMoveFrom}/>
                    }
                }
                else if(i%2===1 && j%2===0){
                    if(i<3 || i>4){
                        board[i][j] = <BoardSquare key={''+i+j} color='#303030' x={i} y={j} hasChecker={true} pickedUpFrom={this.pickedUpFrom} movedPiece={this.movedPiece} didMovePiece={this.didMovePiece} didMoveFrom={this.didMoveFrom}/>
                    }
                    else{
                        board[i][j] = <BoardSquare key={''+i+j} color='#303030' x={i} y={j} hasChecker={false} pickedUpFrom={this.pickedUpFrom} movedPiece={this.movedPiece} didMovePiece={this.didMovePiece} didMoveFrom={this.didMoveFrom}/>
                    }
                }
                else{
                    board[i][j] = <BoardSquare key={''+i+j} color='#e5e5e5' x={i} y={j} hasChecker={false} pickedUpFrom={this.pickedUpFrom} movedPiece={this.movedPiece}/>
                }
            }
        }
        return(<div>{board}</div>)
    }
}
ReactDOM.render(<CheckersGame/>, document.getElementById('root'));
registerServiceWorker();
