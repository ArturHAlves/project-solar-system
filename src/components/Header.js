import React, { Component } from 'react';
import Sistema from '../images/SistemaTitle.png';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={Sistema} alt='Título Sistema Solar' />
      </header>
    );
  }
}

export default Header;
