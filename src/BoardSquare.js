import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './BoardSquare.css';
import Checker from './Checker'

export default class BoardSquare extends Component {
    static propTypes = {
        color: PropTypes.string,
        x: PropTypes.number,
        y: PropTypes.number,
        hasChecker: PropTypes.bool
    }

    constructor(props) {
        super(props)
        this.state = {
            hasChecker: this.props.hasChecker,
            checkerColor: this.props.x < this.props.boardSize / 2
                ? 'black'
                : 'red'
        }
        this.handleDrop = this.handleDrop.bind(this)
        this.pickedUp = this.pickedUp.bind(this)
    }

    handleDrop() {
        this.setState({hasChecker: false})
    }

    onDragOver(e) {
        if (this.props.color !== this.props.lightColor && !this.state.hasChecker) {
            e.preventDefault();
        } else {
            this.props.movedPiece(false)
        }
    }

    onDrop(e) {
        if (this.props.color !== this.props.lightColor && !this.state.hasChecker && e.dataTransfer.getData("color")) {
            this.props.movedPiece(true, this.props.x, this.props.y)
            this.setState({hasChecker: true, checkerColor: e.dataTransfer.getData("color")})
        } else {
            this.props.movedPiece(false)
        }

    }

    pickedUp() {
        this.props.pickedUpFrom(this.props.x, this.props.y)
    }

    shouldComponentUpdate() {
        if ((!this.props.didMovePiece() && this.props.didMoveFrom(this.props.x, this.props.y)) || (this.props.didMoveTo(this.props.x, this.props.y) && this.props.didMoveFrom(this.props.x, this.props.y))) {
            return false
        }
        return true
    }

    render() {
        let checker;
        if (this.state.hasChecker && this.state.checkerColor) {
            checker = <Checker color={this.state.checkerColor} onDrop={this.handleDrop} pickedUp={this.pickedUp}/>
        } else {
            checker = null;
        }
        return (<div className="board-square" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDrop(e)} draggable="false" style={{
                backgroundColor: this.props.color,
                width: 100.0 / this.props.boardSize + 'vmin',
                height: 100.0 / this.props.boardSize + 'vmin'
            }}>
            {checker}
        </div>)
    }
}
