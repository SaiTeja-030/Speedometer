// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onApplyBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="img-container"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="Speedometer"
        />
        <h1 className="para-1">Speed is {speed}mph</h1>
        <p className="para-2">Min limit is 0mph, Max limit is 200mph</p>
        <div className="button-container">
          <button className="but-1" type="button" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="but-2" type="button" onClick={this.onApplyBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
