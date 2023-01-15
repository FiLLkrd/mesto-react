import React from 'react';
import HeaderLogo from '../images/header-logo.svg';

export default function Header() {
 return(
    <div className="header">
    <img
      src={HeaderLogo} 
      alt="Логотип"
      className="header__logo"
    />
  </div>
 )
}
