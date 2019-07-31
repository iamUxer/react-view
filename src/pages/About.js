import React, { Component } from "react"
import styled from "styled-components"

class Popup extends Component {
  render() {
    return (
      <div style={popup}>
        <div style={popup_inner}>
          <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>닫기</button>
        </div>
      </div>
    )
  }
}

class About extends Component {
  constructor() {
    super()
    this.state = {
      showPopup: false
    }
  }
  state = {
    number: 0
  }

  handlIncreaseButton = () => {
    this.setState({
      number: this.state.number + 1
    })
  }
  handlDecreaseButton = () => {
    this.setState({
      number: this.state.number - 1
    })
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  render() {
    return (
      <div>
        <h1>About</h1>

        <p>값: {this.state.number}</p>

        <Button onClick={this.handlIncreaseButton}>더하기</Button>

        <Button onClick={this.handlDecreaseButton}>빼기</Button>

        <Button onClick={this.togglePopup.bind(this)}>팝업창 열기</Button>

        {this.state.showPopup ? (
          <Popup
            text="팝업창이 나타났다"
            closePopup={this.togglePopup.bind(this)}
          />
        ) : null}
      </div>
    )
  }
}

const Button = styled.button`
  background: black;
  color: white;
  padding: 5px;
  font-weight: bold;
`

const popup = {
  position: "fixed",
  width: "100%",
  height: "100%",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  margin: "auto",
  backgroundColor: "rgba(0,0,0, 0.5)"
}

const popup_inner = {
  position: "absolute",
  left: "25%",
  right: "25%",
  top: "25%",
  bottom: "25%",
  margin: "auto",
  background: "white"
}

export default About
