"use client";
import { useState } from "react";
import styles from "./B11.module.scss";
import { handleSelect } from "./B11Logic.js";

interface B11Props {
  options: string[];
}

const B11: React.FC<B11Props> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    handleSelect(option, setSelectedOption, setIsOpen);
  };

  return (
    <div className={styles.selectContainer}>
      <label>Môn học:</label>
      <div className={styles.selectBox} onClick={toggleDropdown}>
        <div className={styles.selectedOption}>{selectedOption}</div>
        <div className={`${styles.arrow} ${isOpen ? styles.open : ""}`}>▼</div>
      </div>
      {isOpen && (
        <ul className={styles.optionsList}>
          {options.map((option, index) => (
            <li
              key={index}
              className={`${styles.option} ${
                option === selectedOption ? styles.selected : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
              {option === selectedOption && (
                <span className={styles.checkmark}>✔</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default B11;
