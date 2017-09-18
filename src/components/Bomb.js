// Bomb Component Code Goes Here
// Bomb Component Code Goes Here
import React from 'react'
import ReactDOM from 'react-dom'


class Bomb extends React.Component {
  constructor(props){
    super()

    this.state = { secondsLeft: props.initialCount}
  }
  render(){

    let msg = ''
    if(this.state.secondsLeft === 0){
      msg = 'Boom!'
    } else {
      msg = `${this.state.secondsLeft} seconds left before I go boom!`
    }
    return <div>{msg}</div>
  }
}

export default Bomb
