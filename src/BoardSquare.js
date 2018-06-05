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
    this.state={hasChecker: this.props.hasChecker}
  }

  onDragOver(e){
    if(this.props.color !== '#e5e5e5'){
      e.preventDefault();
    }
  }

  onDrop(e, x, y){
    let prevX = e.dataTransfer.getData("x")
    let prevY = e.dataTransfer.getData("y")
    if(prevX !== this.props.x || prevY !== this.props.y){
      e.dataTransfer.setData("x", x);
      e.dataTransfer.setData("y", y);
      this.setState({hasChecker: true})
    }
    else{
      this.setState({hasChecker: false})
    }
  }

  componentDidMount(){
    document.title = "Checkers";
  }

  render(){
    let checker;
    if(this.state.hasChecker){
      checker = <Checker color={this.props.x<3?'black':'red'} x={this.props.x} y={this.props.y} />
    }
    else{
      checker = null;
    }
    return(
      <div className="board-square"
         onDragOver={(e)=>this.onDragOver(e)}
         onDrop={(e)=>this.onDrop(e, this.props.x, this.props.y)}
         style={{backgroundColor: this.props.color, left: 12.5*this.props.x + "vmin", top: 12.5*this.props.y + "vmin"}}
      >
        <span>{checker}</span>
      </div>
    )
  }
}
