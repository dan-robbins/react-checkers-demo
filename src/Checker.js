import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Checker.css';

export default class Checker extends Component {
  static propTypes = {
    color: PropTypes.string,
  }

  onDragStart(e, name){
    e.dataTransfer.setData("color", this.props.color);
  }

  render(){
    return(
      <div className="checker"
           onDragStart={(e)=>this.onDragStart(e,this.props.color)}
           draggable
           style={{backgroundColor: this.props.color}}
      >
      </div>
    )
  }
}
