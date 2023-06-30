import React from 'react';
import { Link } from 'react-router-dom';
import style from  '../Styles/Navbar.module.css'; 
import { useParams } from 'react-router-dom';

function Navbar() {
  const {id}  =useParams()
  return (
    <nav className={style.navbar}>
      <ul className={style.navbar__list}>
        <li className={style.navbar__item}>
          <Link to="/signup" className={style.navbar__link}>Signup</Link>
        </li>
        <li className={style.navbar__item}>
          <Link to="/login" className={style.navbar__link}>Login</Link>
        </li>
        <li className={style.navbar__item}>
          <Link to={`/dashboard`} className={style.navbar__link}>Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
