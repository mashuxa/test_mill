import { useState, useCallback, FC } from 'react';
import styles from './styles.module.scss';
import { Employee } from "./types";
import EmployeeRow from "./EmployeeRow/EmployeeRow";
import EmployeeForm from "./EmployeeForm/EmployeeForm";

const defaultData: Employee = { name: 'Jan', surname: 'Kowalski' };

const EmployeeTable: FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([defaultData]);
  const handleRemoveEmployee = useCallback((index: number) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((_, i) => i !== index)
    );
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.table}>
        <div className={styles.head}>Pracownicy</div>
        {employees.map((employee, index) => (
          <EmployeeRow key={index} index={index} onRemove={handleRemoveEmployee} {...employee} />
        ))}
      </div>
      <EmployeeForm disabled={employees.length >= 5} setEmployees={setEmployees} />
    </div>
  );
};

export default EmployeeTable;
