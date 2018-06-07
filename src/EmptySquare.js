import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './EmptySquare.css';

export default class EmptySquare extends Component {
    static propTypes = {
        x: PropTypes.number,
        y: PropTypes.number
    }

    constructor(props) {
        super(props)
        this.state = {
            hasChecker: false
        }
    }

    onDragOver(e) {
        e.preventDefault();
    }

    onDrop(e) {
        this.props.movedPiece(true, this.props.x, this.props.y)
    }

    render() {
        return (<div className="empty-square" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e)} draggable="false" style={{
                width: 100.0 / this.props.boardSize + 'vmin',
                height: 100.0 / this.props.boardSize + 'vmin'
            }}></div>)
    }
}
