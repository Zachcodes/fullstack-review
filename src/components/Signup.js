import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../redux/userReducer';
import { Redirect } from 'react-router-dom';

class Signup extends Component {
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

  signupUser = () => {
    let { username, password } = this.state;
    this.props.signup(username, password);
  };

  render() {
    let { username, password } = this.state;
    let { user } = this.props;
    if (user.loggedIn) return <Redirect to="/" />;
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
          <button onClick={this.signupUser}>Signup</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.user;
}

export default connect(
  mapStateToProps,
  { signup }
)(Signup);
