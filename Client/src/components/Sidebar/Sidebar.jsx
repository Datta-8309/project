// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { MdDashboard } from 'react-icons/md';
import { IoSettingsSharp } from 'react-icons/io5';
import { FiLogOut } from 'react-icons/fi';
import { RiDatabase2Line } from 'react-icons/ri';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className={styles.sidebar}>
      <div className={styles.profileSection}>
        <div className={styles.profileIcon}>JD</div>
        <div className={styles.profileInfo}>
          <span className={styles.profileName}>John Doe</span>
          <span className={styles.profileRole}>Admin</span>
        </div>
      </div>
      <nav className={styles.nav}>
        <Link
          to="/dashboard"
          className={`${styles.navItem} ${location.pathname === '/dashboard' ? styles.active : ''}`}
        >
          <MdDashboard className={styles.icon} />
          Dashboard
        </Link>
        <Link
          to="/source"
          className={`${styles.navItem} ${location.pathname === '/source' ? styles.active : ''}`}
        >
          <RiDatabase2Line className={styles.icon} />
          Source
        </Link>
        <Link
          to="/settings"
          className={`${styles.navItem} ${location.pathname === '/settings' ? styles.active : ''}`}
        >
          <IoSettingsSharp className={styles.icon} />
          Settings
        </Link>
        <Link
          to="/logout"
          className={`${styles.navItem} ${styles.logoutItem}`}
        >
          <FiLogOut className={styles.icon} />
          Logout
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;