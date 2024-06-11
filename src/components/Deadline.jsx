import React from 'react'

export default class Deadline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: this.props.time
    }
    this.timer = setInterval(() => {
        this.setState({
          left: this.state.left - 1
        });
        if (this.state.left < 1) {
          clearInterval(this.timer);
        }
    }, 1000)
  }
  render() {
    const { left } = this.state;
    return (
      <div onClick={this.props.onClick}>剩余时间：{left}</div>
    )
  }
}
