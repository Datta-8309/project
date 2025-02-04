// src/components/Header/Header.jsx
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Add your header content here */}
      <h1>Demo</h1>
      {/* Add other header elements like notifications, user profile, etc. */}
    </header>
  );
};

export default Header;