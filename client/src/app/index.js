import React from 'react'
import './App.css';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar, SignUpButton, Garden, Plant } from '../components'
import { SignUp, LogIn } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        userName: "",
        userID: 0,
        garden: []
      }
      this.setUser = this.setUser.bind(this)
    }

    setUser(userName, id, garden) {
      console.log("SETTING USER")
      this.setState({
        userName: userName,
        id: id,
        garden: this.parseGarden(garden)
      })
      console.log("User is " + this.state.id + " " + this.state.userName)
    }

    parseGarden(garden) {
      console.log("Garden loaded")
      let parsedGarden = []
      for (let plant = 0; plant < garden.length; plant ++ ) {
        parsedGarden.push(Object.assign(new Plant, garden[plant]))
      }
      return parsedGarden
    }

    render() {
    return (
        <Router>
            <NavBar user={this.state.userName} setUser={this.setUser} />
            {this.state.userName ? <Garden size={5} garden={this.state.garden} userName={this.state.userName} id={this.state.id} /> : <div><LogIn setUser={this.setUser} /> <SignUp setUser={this.setUser} /></div>}
          </Router>
    )
  }
}

export default App
