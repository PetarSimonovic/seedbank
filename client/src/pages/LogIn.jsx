import React, { Component } from 'react';
import api from '../api';


import styled from 'styled-components';

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`


class LogIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }


    handleChangeInputPassword = async event => {
        const password = event.target.value
        this.setState({ password })
    }

    handleGetUser = async () => {

        await api.getUser(this.state.name).then(res => {
          console.log(res)
            if (res.status === 204) {
              window.alert(`No user found`)
            } else if (this.state.password === res.data.data.password) {
              const name = res.data.data.name
              const id = res.data.data._id
              const world = JSON.parse(res.data.data.world)
              const worldChosen = res.data.data.worldChosen
              const lastLogin = res.data.data.lastLogin
              const newUser = false

              window.alert(`Welcome back ${name}`)
              this.props.setUser(name, id, world, worldChosen, lastLogin, newUser)
            } else {
              window.alert(`Incorrect password`)
            }
        })
    }

    render() {
        const { name, email, password } = this.state
        return (
            <Wrapper>
                <Title>Log In</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Password: </Label>
                <InputText
                    type="text"
                    value={password}
                    onChange={this.handleChangeInputPassword}
                />

                <Button onClick={this.handleGetUser}>Log In</Button>
            </Wrapper>
        )
    }
}

export default LogIn
