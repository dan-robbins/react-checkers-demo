import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DropBox.css';

export default class DropBox extends Component {
  static propTypes = {
    color: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number
  }

  render(){
    return(
      <div className="drop-box"
         onDragOver={(e)=>this.onDragOver(e)}
         onDrop={(e)=>this.onDrop(e, "left")}
         style={{backgroundColor: this.props.color, left: 12.5*this.props.x + "vmin", top: 12.5*this.props.y + "vmin"}}
      >
      </div>
    )
  }
}
