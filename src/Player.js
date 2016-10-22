import React from 'react'

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: this.props.score
    }

    this.incrementScore = this.incrementScore.bind(this)
    this.decrementScore = this.decrementScore.bind(this)
  }
  incrementScore(event) {
    this.setState({
      score: this.state.score + 10
    })
  }
  decrementScore(event) {
    this.setState({
      score: this.state.score - 10
    })
  }
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
            <button style={buttonStyle} onClick={this.decrementScore}> - </button>
            <span style={scoreStyle}> {this.state.score} </span>
            <button style={buttonStyle} onClick={this.incrementScore}> + </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Player
