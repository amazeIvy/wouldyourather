import React, { Component } from 'react';

class Login extends Component {
  render () {
    return (
      <div className="center log-in-container">
        <h3>Welcome to Would You Rather<br />Please Log In to Continue</h3>
        <div>
          <img className="log-in-img" src="https://i.kfs.io/album/global/24208457,0v1/fit/500x500.jpg" />
        </div>
        <div className="log-in-box">
          <select>
            <option value="" disabled selected>Select User</option>
            <option value="sarahedo">Sarah Edo</option>
            <option value="tylermcginnis">Tyler McGinnis</option>
          </select>
        </div>
        <button className="btn">
          Log In
        </button>
      </div>
    );
  }
}

export default Login;
