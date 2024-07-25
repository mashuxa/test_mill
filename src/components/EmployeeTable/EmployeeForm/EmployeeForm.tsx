import React, { useState, useCallback, Dispatch, SetStateAction, ChangeEvent } from 'react';
import { Employee } from "../types";
import styles from "./styles.module.scss";

 interface EmployeeFormProps {
   disabled: boolean;
   setEmployees: Dispatch<SetStateAction<Employee[]>>;
 }

const EmployeeForm: React.FC<EmployeeFormProps> = ({ disabled, setEmployees }) => {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [error, setError] = useState<string>('');

  const resetError = useCallback(() => {
    setError('')
  }, []);
  const resetForm = useCallback(() => {
    setName('');
    setSurname('');
    setError('');
  }, []);

  const addEmployee = useCallback(() => {
    if (!name || !surname) {
      setError('Name and Surname cannot be empty');
      return;
    }

    if (disabled) {
      setError('You can not add more');
      return;
    }

    setEmployees((prevEmployees) => [...prevEmployees, { name, surname }]);
    resetForm();
  }, [disabled, name, resetForm, setEmployees, surname]);

  const handleName = useCallback((e: ChangeEvent<HTMLInputElement>) => setName(e.target.value), [])
  const handleSurname = useCallback((e: ChangeEvent<HTMLInputElement>) => setSurname(e.target.value), [])

  return (
      <form onFocus={resetError}>
        <input type="text" placeholder="Name" value={name} onChange={handleName} />
        <input className={styles.input} type="text" placeholder="Surname" value={surname} onChange={handleSurname} />
        <button type="button" onClick={addEmployee} disabled={disabled}>
          Add Employee
        </button>
        {error && <div className={styles.error}>{error}</div>}
      </form>
  );
};

export default EmployeeForm;
