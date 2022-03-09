import React from 'react';
import styles from './main.module.scss';
import Header from '../../components/Header';
import IpcPage from '../../pages/IpcPage';

const Main = () => {
 return <div className={styles.wrapper}>
         <Header />
         <main className={styles.content}>
            <IpcPage />
         </main>
     </div>
}

export default Main;
