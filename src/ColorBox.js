import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
       {/* your conditional code here! 
          need to reduce to get desired outcome
          */         
          this.props.opacity >= .2 ? ( 
            <ColorBox opacity={this.props.opacity - .1} />
          ) : null
          }
       
      </div>
    )
  }
}

