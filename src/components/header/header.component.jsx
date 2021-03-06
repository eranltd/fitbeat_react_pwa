import React from 'react';
import './header.styles.scss'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/fitbeat_logo.svg';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/build-plan'>
        BUILD PLAN
      </Link>
      <Link className='option' to='/statistics'>
        STATS
      </Link>
      {currentUser ? (
        <div className='option' onClick={123}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

  
  export default Header;