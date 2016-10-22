import React from 'react'

import Players from "./Players.js";
import AddPlayer from "./AddPlayer.js"

class Leaderboard extends React.Component {
  constructor (props) {
    super(props)

    const PLAYERS = [
      {id: 1, name: "Brendan Eich", score: 25},
      {id: 2, name: "Chris Lattner", score: 10},
      {id: 3, name: "Jose Valim", score: 30}
    ]

    this.state = {
      members: PLAYERS
    }

  }
  onPlayerAdd(name) {
    let members = this.state.members
    members.push({id: members.length + 1, name: name, score: 10})
    
    this.setState({
      members: members
    })
  }
  render() {

    const style = {
      padding: 60
    }

    return (
      <div style={style}>
        <h1>Leaderboard</h1>
        <Players members={this.state.members} />
        <AddPlayer onAdd={this.onPlayerAdd.bind(this)} />
      </div>
    )
  }
}

export default Leaderboard
