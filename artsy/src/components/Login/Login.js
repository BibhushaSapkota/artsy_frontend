import { useState } from 'react';
import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { Button, Label, Input } from 'reactstrap';
import userService from '../../services/userService';
import './Login.css';
import signin from './signin.png';
import {message} from 'antd';

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const Navigate=useNavigate()
    const[isLogged, setIsLogged] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username, password)
        userService.login({ username, password })
          .then(response => {
            if (response.data.role === 'Admin') {
                console.log(response.data.role)
                window.localStorage.setItem('token', response.data.token)
                setIsLogged(true)
                message.success('Login Successful')
                Navigate('/admin')
            } else {
                console.log(response.data)
                window.localStorage.setItem('token', response.data.token)
                window.localStorage.setItem('id', response.data.user._id)
                console.log(response.data.user._id)
                setIsLogged(true)
                message.success('Login Successful')
              Navigate('/')
            }
          })
          .catch(err => window.alert(err.response.data.err))
      }

    return (
        <div className='main-login'>
            <div className='login-contain'>	
            <div className='left-side'>
                <h2>Sign in </h2>
                <form onSubmit={handleSubmit}>
              
                    <Label for="username">
                        Username
                    </Label>
                    <Input
                        id="username"
                        name="username"
                        placeholder="Enter Username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <Label for="Password">
                        Password
                    </Label>
                    <Input
                        id="password"
                        name="password"
                        placeholder=" Enter Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                
                
                <Button type='submit' id="submit-btn">
                    Login
                </Button>


                </form>
                <div className='footer-login'>
                    <p>Not registered yet ? <Link to ='/register'> Click me</Link> </p>
                </div>

            </div>
            <div className='right-side'>
            <div className='welcome-contain'>
                <h2>Welcome Back!</h2>
                
            </div>

            <div className='img-contain'>
                <img src={signin} alt='' srcSet='' />

            </div>
            
            </div>                
            </div>

        </div>   

    )
}

export default Login;