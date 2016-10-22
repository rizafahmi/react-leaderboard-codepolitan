import React from 'react'

class Player extends React.Component {
  render() {
    const playerStyle = {
      display: 'flex',
      padding: 10
    }
    const playerNameStyle = {
      flex: '1'
    }
    const playerScoreStyle = {
      width: 200
    }
    const scoreStyle = {
      padding: 20
    }
    const buttonStyle = {
      padding: 10
    }
    return (
      <div style={playerStyle}>
        <div style={playerNameStyle}>
          {this.props.name}
        </div>
        <div style={playerScoreStyle}>
          <div className="counter">
            <button style={buttonStyle}> - </button>
            <span style={scoreStyle}> {this.props.score} </span>
            <button style={buttonStyle}> + </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Player
