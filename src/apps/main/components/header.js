import React from 'react';
import { Link } from 'react-router-dom';
import AuthHeaderPanel from '../../auth/containers/AuthHeaderPanel';

const Header = () => (
  <header className="header">
    <div className="header__content">
      <Link to="/">
        <title className="header__content__logo">КнигоИскатель</title>
      </Link>
      <div>
        <AuthHeaderPanel />
      </div>
    </div>
  </header>
);

export default Header;
