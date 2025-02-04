// src/pages/Source/Source.jsx
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import styles from './Source.module.css';

const Source = () => {
  return (
    <MainLayout>
      <div className={styles.sourcePage}>
        <h1 className={styles.pageTitle}>Sources</h1>
        <div className={styles.sourceControls}>
          <button className={styles.controlButton}>Text</button>
          <button className={styles.controlButton}>CSV</button>
          <button className={styles.controlButton}>PDF</button>
          <button className={styles.controlButton}>Webpage</button>
          <button className={styles.controlButton}>Google Drive</button>
        </div>
        <div className={styles.addSource}>
          <input type="text" placeholder="Add Source" className={styles.addSourceInput} />
        </div>
        <div className={styles.currentSources}>
          <h2>Currently used sources</h2>
          <ul className={styles.sourcesList}>
            <li className={styles.sourceItem}>
              <span>New_prospect_prospects.csv</span>
              <small>Added about 15 hours ago</small>
              <button className={styles.removeButton}>X</button>
            </li>
          </ul>
        </div>
        <div className={styles.questionSection}>
          <textarea placeholder="Ask a question to your sources..." className={styles.questionInput}></textarea>
          <button className={styles.submitButton}>Submit</button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Source;