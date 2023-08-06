import React from 'react';
import './Register.css';
import logo from './logo.png';
import body from './body.png';
import {Link,useNavigate} from 'react-router-dom';
import { useState, useEffect } from "react"
import { Form, FormFeedback, Input} from "reactstrap"
import userService from '../../services/userService';
import defaultAvatar from './avatar.png'

function Register(){
    const [image, setImage] = useState(null);
    const [fname, setFirstname] = useState('')
    const [lname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    const [message, setMessage] = useState('')
    const Navigate=useNavigate()

    useEffect(() => {
        if (password !== cpassword) {
            setMessage('password and confirm password does not match')
            return
        }
        else if (username.length !==0 && username.length < 6) {
            setMessage('username should be atleast 6 characters')
            return
        }
        setMessage('')

    }, [cpassword, password,username])

    function handleImageChange(e) {
        setImage(e.target.files[0]);
    }

      
    async function handleRegister(e) {
        e.preventDefault();
        try {
          if (!fname || !lname || !username || !email || !password || !cpassword) {
            throw new Error('All fields are required')
          }
          
          const formData = new FormData()
          formData.append('image', image)
          formData.append('fname', fname)
          formData.append('lname', lname)
          formData.append('email', email)
          formData.append('username', username)
          formData.append('password', password)
      
          const response = await userService.register(formData)
      
          if (response.data.status) {
            alert(response.data.status)
            Navigate('/login')
          } else {
            throw new Error('Error occurred while registering')
          }
        } catch (error) {
          alert(error.message)
        }
      }
    


    return(
        <div className="main-register">            
                <div className="leftside-register">
                    <div className="register-header">
                        <img src={logo}  id='logo-img' alt='' srcSet=''/>
                    </div>
                    <div className='body'>
                        <img src={body} id='body-img' alt='' srcSet=''/>
                    </div>
                    <p>"Bringing Art to Your Doorstep: Elevate Your Space with Every Purchase"</p>
                </div>

                <div className="rightside-register">
                    <div className="top-right">
                        <h5>Already have an account ?
                        <Link id='link-signin' to='/login'>  Login</Link>
                        </h5>
                    </div>
                    <div className="body-right">
                        <div className='container-register'>
                        <div className='avatar'>
                        {image ? (
                            <img src={URL.createObjectURL(image)} alt="avatar" />
                        ) : (
                            <img src={defaultAvatar} alt="default avatar" />
                        )}
                        </div>

                        
                        <Form>
                        <div className='input-group'>
                                <h5>Profile Picture</h5>
                                <input
                                    id="image"
                                    name="image"
                                    placeholder="enter your Profile Picture"
                                    accept="image/*"
                                    type="file"
                                    onChange={handleImageChange}
                                />
                        </div>
                        <div className='input-group'>
                                <h5>First Name</h5>
                                <input
                                    id="fname"
                                    name="fname"
                                    placeholder="enter your First Name"
                                    type="text"
                                    value={fname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                />
                            </div>
                            <div className='input-group'>
                                <h5>Last Name</h5>
                                <input
                                    id="lname"
                                    name="lname"
                                    placeholder="enter your Last Name"
                                    type="text"
                                    value={lname}
                                    onChange={(e) => setLastname(e.target.value)}
                                />
                            </div> 
                            <div className='input-group'>   
                                <h5>Email</h5>
                                <input
                                    id="email"
                                    name="email"
                                    placeholder="enter your Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='input-group'>    
                                <h5>Username</h5>
                                <input
                                    id="username"
                                    name="username"
                                    placeholder="enter your Username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div> 
                            <div className='input-group'>   
                                <h5>Password</h5>
                                <input 
                                    id="password"
                                    name="password"
                                    placeholder="enter your Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div> 
                            <div className='input-group'>   
                                <h5>Confirm Password</h5>
                                <input 
                                    id="cpassword"
                                    name="cpassword"
                                    placeholder="enter your Confirm Password"
                                    type="password"
                                    value={cpassword}
                                    onChange={(e) => setCPassword(e.target.value)}
                                />
                            </div> 
                            <div className='input-group'>
                            <div style={{position:"absolute",marginLeft:"5rem" }}>
                                <FormFeedback style={{color:"red",fontSize:"0.8rem"}}>{message}</FormFeedback>
                            </div>
                            </div>
                            

                            <div className='input-group'>
                                <Input type="submit" value="Register" id='sbtn'onClick={handleRegister} />
                            </div>
                            </Form>
     
                            
                        
                        </div>


                    </div>
                   
                </div>
           
        </div>
    )
}

export default Register;