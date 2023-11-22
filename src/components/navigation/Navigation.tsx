import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <div className={styles.navbar}>
      <span className={styles.navbar__text}>Moviy</span>
          <ul className={styles.navbar__links}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
    </div>
  );
}

export default Navigation;
