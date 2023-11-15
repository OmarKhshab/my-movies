import React from 'react';
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <div className={styles.navbar}>
      <span className={styles.navbar__text}>Moviy</span>
    </div>
  );
}

export default Navigation;
