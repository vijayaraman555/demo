/**
 *
 * @author vijayaraman
 * @since 22/01/2020.
 *
 */
'use strict';

import React from 'react';
import { Redirect } from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
    super(props);
        this.state = { 
          username: '',
          password: '', 
          redirectUrl: false
        };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
      if(this.state.username == 'vijay' && this.state.password == '12345'){
        this.setState({redirectUrl:true});
        console.log(this.state,'state');
      }else {
        console.log('error');
      }
    
    
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  render() {
    if(this.state.redirectUrl){
          return <Redirect to='/demo'  />
    }
    return (
    	<div className="login">
        <div className="container">
        <h3>Login</h3>
         <form className="loginform" onSubmit={this.mySubmitHandler}>
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" onChange={this.myChangeHandler} required />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" onChange={this.myChangeHandler} required />
              
            <button type="submit">Login</button>
          
        </form>
        </div>
    	</div>
    	);
  }
}

export default Login;