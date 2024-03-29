import React from 'react'
import { WorldData } from '../gameObjects'
import { saveGarden, setDate } from '../functions'


import './App.css';


import { BrowserRouter as Router } from 'react-router-dom'
import { NavBar } from '../components'
import { SignUp, LogIn, SeedBank } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        userName: "",
        id: 0,
        world: {},
        chosenWorld: false,
        lastLogin: "",
        newUser: true
      }
      this.setUser = this.setUser.bind(this)
      this.newWorld = this.newWorld.bind(this)
      this.saveWorld = this.saveWorld.bind(this)
      this.connecToServer = this.connecToServer.bind(this)
    }

    componentDidMount() {
      this.connecToServer();
      }

    connecToServer() {
       fetch('/');
     }


    setUser(userName, id, world, worldChosen, lastLogin, newUser) {
      this.setState({
        userName: userName,
        id: id,
        world: world,
        worldChosen: worldChosen,
        lastLogin: lastLogin,
        today: setDate().stamp,
        newUser: newUser
      })
        }

    newWorld() {
      const newWorld = new WorldData()
      this.setState({
        world: newWorld
      })
    }

    saveWorld() {
      this.setState({
        worldChosen: true
      })
      saveGarden(this.state.id, this.state.world, true)
    }



    render() {
    return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Router>
            <NavBar user={this.state.userName} setUser={this.setUser} />
          </Router>
          {this.state.userName ?
            <SeedBank
              id={this.state.id}
              userName={this.state.userName}
              newWorld={this.newWorld}
              world={this.state.world}
              worldChosen={this.state.worldChosen}
              saveWorld={this.saveWorld}
              lastLogin={this.state.lastLogin}
              today={this.state.today}
            /> :
            <div>
              <LogIn setUser={this.setUser} />
              <SignUp setUser={this.setUser} />
            </div> }
    </div>
    )
  }
}

export default App
