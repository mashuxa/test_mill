import React, { useCallback, Fragment } from 'react';
import styles from './styles.module.scss';
import { Employee } from "../types";

interface EmployeeRowProps extends Employee {
  index: number;
  onRemove: (index: number) => void;
}

const EmployeeRow: React.FC<EmployeeRowProps> = ({ index, onRemove, name, surname }) => {
  const handleRemove = useCallback(() => {
    onRemove(index);
  }, [index, onRemove]);

  return (
          <>
            <div className={styles.cell}>
              <button className={styles.btn} onClick={handleRemove}>
                Remove
              </button>
              {name}
            </div>
            <div className={styles.cell}>
              {surname}
            </div>
          </>
  );
};

export default EmployeeRow;
