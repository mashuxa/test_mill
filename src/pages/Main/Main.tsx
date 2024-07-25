import React, { FC } from 'react';
import EmployeeTable from "../../components/EmployeeTable/EmployeeTable";
import styles from './styles.module.scss';

const Main: FC = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>A</header>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.hero}>
            C
            <div className={styles.ads}>E</div>
          </div>
          <EmployeeTable/>
        </main>
      </div>
      <footer className={styles.footer}>D</footer>
    </div>

);
}

export default Main;
