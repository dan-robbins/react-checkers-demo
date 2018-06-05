import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Checker.css';

export default class Checker extends Component {
  static propTypes = {
    color: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number
  }

  constructor(props){
    super(props);
    this.state={x: this.props.x,
                y: this.props.y};
  }

  onDragStart(e, x, y){
    e.dataTransfer.setData("x", x);
    e.dataTransfer.setData("y", y);
  }

  onDragEnd(e){
    this.setState({x: e.dataTransfer.getData("x"),
                   y: e.dataTransfer.getData("y")});
  }

  get color(){
    return this.props.color
  }

  get x(){
    return this.state.x
  }

  get y(){
    return this.state.y
  }

  render(){
    return(
      <div className="checker"
           onDragStart={(e)=>this.onDragStart(e,this.state.x, this.state.y)}
           onDragEnd={(e)=>this.onDragEnd(e)}
           draggable
           style={{backgroundColor: this.props.color}}
      >
      </div>
    )
  }
}
