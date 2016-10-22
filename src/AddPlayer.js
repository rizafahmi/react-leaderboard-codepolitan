import React from 'react'

class AddPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
    this.onPlayerChange = this.onPlayerChange.bind(this)
    this.addPlayer = this.addPlayer.bind(this)
  }
  onPlayerChange(event) {
    this.setState({
      name: event.target.value
    })
  }
  addPlayer(event) {
    this.props.onAdd(this.state.name)
    this.setState({
      name: ""
    })
  }
  render() {
    const style = {
      padding: 10
    }
    const inputStyle = {
      flex: 1,
      paddingRight: 20,
      width: "45%",
      height: 27
    }
    const buttonStyle = {
      float: "right",
      marginRight: 80,
      width: 120,
      padding: 10
    }
    return (
      <div style={style}>
        <input type="text" placeholder="Put your favorite developer name here..." onChange={this.onPlayerChange} value={this.state.name} style={inputStyle} />
        <button style={buttonStyle} onClick={this.addPlayer}>Add Player</button>
      </div>
    )
  }
}

export default AddPlayer
