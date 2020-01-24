/**
 *
 * @author vijayaraman
 * @since 22/01/2020.
 *
 */
'use strict';

import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
    	<div className="login">
         <form >
          <div className="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required>
              
            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember"> Remember me
            </label>
          </div>

          <div className="container" style="background-color:#f1f1f1">
            <button type="button" onclick="document.getElementById('id01').style.display='none'" className="cancelbtn">Cancel</button>
            <span className="psw">Forgot <a href="#">password?</a></span>
          </div>
        </form>
    	</div>
    	);
  }
}

export default Login;