import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/userReducer';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  loginUser = () => {
    let { username, password } = this.state;
    this.props.login(username, password);
  };

  render() {
    let { username, password } = this.state;
    return (
      <div>
        <div>
          <div>
            Username:{' '}
            <input
              type="text"
              value={username}
              name="username"
              onChange={this.handleChange}
            />
          </div>
          <div>
            Password:{' '}
            <input
              type="password"
              value={password}
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.loginUser}>Login</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { login }
)(Login);
