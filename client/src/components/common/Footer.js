import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <a href="http://">Creative Admin</a> &copy; 2017.
        <span className="float-right">Powered by <a href="http://">Creative Admin</a></span>
      </footer>
    )
  }
}

export default Footer;