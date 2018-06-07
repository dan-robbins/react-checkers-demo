import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BoardSquare from './BoardSquare'
import EmptySquare from './EmptySquare'
import registerServiceWorker from './registerServiceWorker';

class CheckersGame extends Component {
    constructor(props) {
        super(props)
        this.pickedUpFrom = this.pickedUpFrom.bind(this)
        this.movedPiece = this.movedPiece.bind(this)
        this.didMovePiece = this.didMovePiece.bind(this)
        this.didMoveFrom = this.didMoveFrom.bind(this)
        this.didMoveTo = this.didMoveTo.bind(this)
        this.pieceMoved = false
    }

    pickedUpFrom(x, y) {
        this.pickedX = x
        this.pickedY = y
    }

    movedPiece(moved, x, y) {
        this.toX = x
        this.toY = y
        this.pieceMoved = moved
    }

    didMovePiece() {
        return this.pieceMoved
    }

    didMoveFrom(x, y) {
        return this.pickedX === x && this.pickedY === y
    }

    didMoveTo(x, y) {
        return this.toX === x && this.toY === y
    }

    componentDidMount() {
        document.title = "Checkers";
    }

    render() {
        let dark = '#006614'
        let light = '#e5e5e5'
        let boardSize = 8
        let board = [];
        for (let i = 0; i < boardSize; i++) {
            board[i] = [];
            board[i][boardSize] = <EmptySquare key={'empty' + i} boardSize={boardSize} x={i} y={boardSize} movedPiece={this.movedPiece}/>
            board[i][boardSize + 1] = <br key={'br' + i}/>
        }
        board[boardSize] = [];
        for (let i = 0; i <= boardSize; i++) {
            board[boardSize][i] = <EmptySquare key={'bottom' + i} boardSize={boardSize} x={i} y={boardSize} movedPiece={this.movedPiece}/>
        }
        board[boardSize][boardSize + 2] = <br key=""/>
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                if (i % 2 === 0 && j % 2 === 0) {
                    board[i][j] = <BoardSquare key={'' + i + j} boardSize={boardSize} color={light} x={i} y={j} lightColor={light} hasChecker={false} pickedUpFrom={this.pickedUpFrom} movedPiece={this.movedPiece} didMovePiece={this.didMovePiece} didMoveFrom={this.didMoveFrom} didMoveTo={this.didMoveTo}/>
                } else if (i % 2 === 0 && j % 2 === 1) {
                    if (i < Math.ceil(boardSize / 3.0) || i >= Math.floor((2 * boardSize) / 3)) {
                        board[i][j] = <BoardSquare key={'' + i + j} boardSize={boardSize} color={dark} x={i} y={j} lightColor={light} hasChecker={true} pickedUpFrom={this.pickedUpFrom} movedPiece={this.movedPiece} didMovePiece={this.didMovePiece} didMoveFrom={this.didMoveFrom} didMoveTo={this.didMoveTo}/>
                    } else {
                        board[i][j] = <BoardSquare key={'' + i + j} boardSize={boardSize} color={dark} x={i} y={j} lightColor={light} hasChecker={false} pickedUpFrom={this.pickedUpFrom} movedPiece={this.movedPiece} didMovePiece={this.didMovePiece} didMoveFrom={this.didMoveFrom} didMoveTo={this.didMoveTo}/>
                    }
                } else if (i % 2 === 1 && j % 2 === 0) {
                    if (i < Math.ceil(boardSize / 3.0) || i >= Math.floor((2 * boardSize) / 3)) {
                        board[i][j] = <BoardSquare key={'' + i + j} boardSize={boardSize} color={dark} x={i} y={j} lightColor={light} hasChecker={true} pickedUpFrom={this.pickedUpFrom} movedPiece={this.movedPiece} didMovePiece={this.didMovePiece} didMoveFrom={this.didMoveFrom} didMoveTo={this.didMoveTo}/>
                    } else {
                        board[i][j] = <BoardSquare key={'' + i + j} boardSize={boardSize} color={dark} x={i} y={j} lightColor={light} hasChecker={false} pickedUpFrom={this.pickedUpFrom} movedPiece={this.movedPiece} didMovePiece={this.didMovePiece} didMoveFrom={this.didMoveFrom} didMoveTo={this.didMoveTo}/>
                    }
                } else {
                    board[i][j] = <BoardSquare key={'' + i + j} boardSize={boardSize} color={light} x={i} y={j} lightColor={light} hasChecker={false} pickedUpFrom={this.pickedUpFrom} movedPiece={this.movedPiece} didMovePiece={this.didMovePiece} didMoveFrom={this.didMoveFrom} didMoveTo={this.didMoveTo}/>
                }
            }
        }
        return (<div>{board}</div>)
    }
}

ReactDOM.render(<CheckersGame/>, document.getElementById('root'));
registerServiceWorker();
