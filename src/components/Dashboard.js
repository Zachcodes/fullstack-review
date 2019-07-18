import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../redux/userReducer';
import Posts from './Posts';

class Dashboard extends Component {
  componentDidMount() {
    if (!this.props.user.loggedIn) {
      this.props.getUser();
    }
  }

  render() {
    let { redirect, user } = this.props;
    if (redirect) return <Redirect to="/login" />;
    if (!user.loggedIn) return <div>Loading</div>;
    return (
      <div>
        Dashboard!
        <Posts />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.user;
}

export default connect(
  mapStateToProps,
  { getUser }
)(Dashboard);
