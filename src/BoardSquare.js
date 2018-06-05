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
  }

  handleDrop(){
    this.setState({hasChecker: false})
  }

  onDragOver(e){
    if(this.props.color !== '#e5e5e5'){
      e.preventDefault();
    }
  }

  onDrop(e, x, y){
    this.setState({hasChecker: true,
                   checkerColor: e.dataTransfer.getData("color")})
  }

  componentDidMount(){
    document.title = "Checkers";
  }

  render(){
    let checker;
    if(this.state.hasChecker){
      checker = <Checker color={this.state.checkerColor} onDrop={this.handleDrop} />
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
        {checker}
      </div>
    )
  }
}
