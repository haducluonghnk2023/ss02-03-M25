import React from 'react';
import styles from './BaseCart.module.scss';

const BaseCart = ({ content, title, image, children }) => {
  return (
    <div className={styles.baseCart}>
      <div className={styles.content}>{content}</div>
      <div className={styles.title}>{title}</div>
      <img className={styles.image} src={image} alt="Cart Item" />
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default BaseCart;