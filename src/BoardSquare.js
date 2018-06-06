import React, { Component } from 'react';
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

  constructor(props){
    super(props)
    this.state={hasChecker: this.props.hasChecker,
                checkerColor: this.props.x<3?'black':'red'}
    this.handleDrop = this.handleDrop.bind(this)
    this.pickedUp = this.pickedUp.bind(this)
  }

  handleDrop(){
    this.setState({hasChecker: false})
  }

  onDragOver(e){
    if(this.props.color !== this.props.lightColor){
      e.preventDefault();
    }
    else{
      this.props.movedPiece(false)
    }
  }

  onDrop(e){
    if(this.props.color !== this.props.lightColor){
      this.props.movedPiece(true, this.props.x, this.props.y)
      this.setState({hasChecker: true,
                     checkerColor: e.dataTransfer.getData("color")})
    }
    else {
      this.props.movedPiece(false)
    }

  }

  pickedUp(){
    this.props.pickedUpFrom(this.props.x, this.props.y)
  }

  componentDidMount(){
    document.title = "Checkers";
  }

  shouldComponentUpdate(){
    if((!this.props.didMovePiece() && this.props.didMoveFrom(this.props.x, this.props.y)) || (this.props.didMoveTo(this.props.x, this.props.y) && this.props.didMoveFrom(this.props.x, this.props.y))){
      return false
    }
    return true
  }

  render(){
    let checker;
    if(this.state.hasChecker){
      checker = <Checker color={this.state.checkerColor} onDrop={this.handleDrop} pickedUp={this.pickedUp}/>
    }
    else{
      checker = null;
    }
    return(
      <div className="board-square"
         onDragOver={(e)=>this.onDragOver(e)}
         onDrop={(e)=>this.onDrop(e)}
         style={{backgroundColor: this.props.color, left: 12.5*this.props.x + "vmin", top: 12.5*this.props.y + "vmin"}}
      >
        {checker}
      </div>
    )
  }
}
