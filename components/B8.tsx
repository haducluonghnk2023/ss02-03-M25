import React from "react";
import styles from "./Pagination.module.css";
export default function B8() {
  return (
    <div className={styles.pagination}>
      <a href="#" className={styles.paginationLink}>
        &laquo; Prev
      </a>
      <a href="#" className={styles.paginationLink}>
        1
      </a>
      <a href="#" className={styles.paginationLink}>
        2
      </a>
      <a
        href="#"
        className={`${styles.paginationLink} ${styles.paginationLinkActive}`}
      >
        3
      </a>
      <a href="#" className={styles.paginationLink}>
        4
      </a>
      <a href="#" className={styles.paginationLink}>
        5
      </a>
      <a href="#" className={styles.paginationLink}>
        6
      </a>
      <a href="#" className={styles.paginationLink}>
        7
      </a>
      <a href="#" className={styles.paginationLink}>
        ...
      </a>
      <a href="#" className={styles.paginationLink}>
        20
      </a>
      <a href="#" className={styles.paginationLink}>
        Next &raquo;
      </a>
    </div>
  );
}
