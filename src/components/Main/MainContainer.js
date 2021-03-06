import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Main.css';

import ButtonSmall from '../Button/Button';
import Search from '../Search/SearchContainer';

class MainConatiner extends Component {
  constructor(props) {
    super(props);

    this.authUrl = `https://accounts.spotify.com/authorize?client_id=d253ce6ec3ed4723b2d6be092f8a387e&redirect_uri=https:%2F%2F${window.location.host}%2Fauth&scope=user-read-private%20user-read-email%20playlist-modify-public&response_type=token&state=123`;

  }

  isAuth() {
    return this.props.authData.accessToken != null;
  }

  login = () => {
    window.location.replace(this.authUrl);
  };

  render() {
    return (
      this.isAuth() ? (
        <Search />
      ) : (
        <div className="login">
            <ButtonSmall title="Login on Spotify" onClick={this.login}></ButtonSmall>
        </div>
      )
     );
  }

}

const mapStateToProps = store => ({
  authData: store.authState
});

export default connect(mapStateToProps)(MainConatiner);
