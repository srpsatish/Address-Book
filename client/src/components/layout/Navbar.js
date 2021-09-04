import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import ContactContext from '../../context/contact/ContactContext';
import AuthContext from './../../context/auth/AuthContext';

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, Logout, user } = authContext;
  const { clearContacts } = contactContext;

  const handleLogout = () => {
    Logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={handleLogout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className='fas fa-id-card-alt' />
        <Link to='/'>Address Book</Link>
      </h1>
      <ul>
        {isAuthenticated ? authLinks : guestLinks}
        {/* <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
