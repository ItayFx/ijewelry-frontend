import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css';
import MenuIcon from '../../assets/menu.png'

const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks isLoggedIn={props.isLoggedIn} isAdmin={props.isAdmin}/>
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <img src={MenuIcon} alt='icon' className='icon-nav'/>
        </button>
        <h2 className="main-navigation__title">
          <Link to="/">iJewelry</Link>
        </h2>
        <nav className="main-navigation__header-nav">
          <NavLinks isLoggedIn={props.isLoggedIn} isAdmin={props.isAdmin} />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
