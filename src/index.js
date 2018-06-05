import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BoardSquare from './BoardSquare'
import registerServiceWorker from './registerServiceWorker';

const boardSize = 8
let board = [];

for(let i = 0; i < boardSize; i++){
    board[i] = [];
    board[i][boardSize]=<br/>
}
for(let i = 0; i < boardSize; i++){
    for(let j = 0; j < boardSize; j++){
        if(i%2===0 && j%2===0){
            board[i][j] = <BoardSquare key={''+i+j} color='#e5e5e5' x={i} y={j} hasChecker={false} />
        }
        else if(i%2===0 && j%2===1){
            if(i<3 || i>4){
                board[i][j] = <BoardSquare key={''+i+j} color='#303030' x={i} y={j} hasChecker={true} />
            }
            else{
                board[i][j] = <BoardSquare key={''+i+j} color='#303030' x={i} y={j} hasChecker={false} />
            }
        }
        else if(i%2===1 && j%2===0){
            if(i<3 || i>4){
                board[i][j] = <BoardSquare key={''+i+j} color='#303030' x={i} y={j} hasChecker={true} />
            }
            else{
                board[i][j] = <BoardSquare key={''+i+j} color='#303030' x={i} y={j} hasChecker={false} />
            }
        }
        else{
            board[i][j] = <BoardSquare key={''+i+j} color='#e5e5e5' x={i} y={j} hasChecker={false} />
        }
    }
}

ReactDOM.render(
    <div>
        {board}
    </div>
    , document.getElementById('root'));
registerServiceWorker();
