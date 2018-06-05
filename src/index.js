import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DropBox from './DropBox'
import registerServiceWorker from './registerServiceWorker';

let board = [];
for(let i = 0; i < 8; i++){
    board[i] = [];
    board[i][8]=<br/>
}
for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
        if(i%2===0 && j%2===0){
            board[i][j] = <DropBox key={''+i+j} color='#303030' x={i} y={j} />
        }
        else if(i%2===0 && j%2===1){
            board[i][j] = <DropBox key={''+i+j} color='#ff3030' x={i} y={j} />
        }
        else if(i%2===1 && j%2===0){
            board[i][j] = <DropBox key={''+i+j} color='#ff3030' x={i} y={j} />
        }
        else{
            board[i][j] = <DropBox key={''+i+j} color='#303030' x={i} y={j} />
        }
    }
}

ReactDOM.render(
    <div>
        {board}
    </div>
    , document.getElementById('root'));
registerServiceWorker();
