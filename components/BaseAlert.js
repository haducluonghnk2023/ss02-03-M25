import React from 'react';
import styles from './BaseAlert.module.css';

const BaseAlert = ({ type, children, ...props }) => {
  const alertClass = styles[type] || '';

  return (
    <div className={alertClass} {...props}>
      {children}
    </div>
  );
};

export default BaseAlert;