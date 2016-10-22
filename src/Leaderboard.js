import React from 'react'

import Players from "./Players.js";

class Leaderboard extends React.Component {
  render() {

    const PLAYERS = [
      {id: 1, name: "Brendan Eich", score: 25},
      {id: 2, name: "Chris Lattner", score: 10},
      {id: 3, name: "Jose Valim", score: 30}
    ]

    const style = {
      padding: 60
    }

    return (
      <div style={style}>
        <h1>Leaderboard</h1>
        <Players members={PLAYERS} />
      </div>
    )
  }
}

export default Leaderboard
