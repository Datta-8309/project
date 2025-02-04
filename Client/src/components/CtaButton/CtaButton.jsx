// src/components/CtaButton/CtaButton.jsx
import React from 'react';
import styles from './CtaButton.module.css';

const CtaButton = ({ onClick, children }) => {
  return (
    <button className={styles.ctaButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default CtaButton;