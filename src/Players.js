import React from 'react'

class Players extends React.Component {
  render() {
    return (
      <div>
        <div className="player">
          <div className="player-name">
            Brendan Eich
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement"> - </button>
              <span className="counter-score"> 30 </span>
              <button className="counter-action increment"> + </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Players
