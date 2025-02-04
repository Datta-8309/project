// src/components/TaskList/TaskList.jsx
import React from 'react';
import styles from './TaskList.module.css';

const TaskList = () => {
  const tasks = [
    { id: 1, text: 'Connect your Google Account', completed: true },
    { id: 2, text: 'Connect your LinkedIn Account', completed: false },
    { id: 3, text: 'Add your Signature for your emails', completed: false },
    { id: 4, text: 'Add Your Professors', completed: false },
    { id: 5, text: 'Create your first Style', completed: false },
    { id: 6, text: 'Create your first Prospect List', completed: true },
    { id: 7, text: 'Create', completed: false },
  ];

  return (
    <div className={styles.taskList}>
      <h2 className={styles.taskListTitle}>Let’s get you started with your first campaign!</h2>
      <ul className={styles.tasks}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.taskItem}>
            <input
              type="checkbox"
              checked={task.completed}
              readOnly
              className={styles.checkbox}
            />
            <span className={`${styles.taskText} ${task.completed ? styles.completed : ''}`}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;