// src/pages/Dashboard/Dashboard.jsx
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import TaskList from '../../components/TaskList/TaskList';
import CtaButton from '../../components/CtaButton/CtaButton';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const handleStartCampaign = () => {
    alert('Starting your first campaign!');
  };

  return (
    <MainLayout>
      <div className={styles.dashboard}>
        <div className={styles.welcomeSection}>
          <h1 className={styles.welcomeTitle}>Good Afternoon, Vignesh</h1>
          <p className={styles.welcomeMessage}>Welcome to <strong>Demo</strong>!</p>
        </div>
        <TaskList />
        <CtaButton onClick={handleStartCampaign}>Start Your First Campaign</CtaButton>
      </div>
    </MainLayout>
  );
};

export default Dashboard;