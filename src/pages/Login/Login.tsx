import React from 'react';
import styles from './login.module.scss';
import LoginForm from '../../components/LoginForm';

const Main = () => {
 return <div className={styles.wrapper}>
         <main>
            <LoginForm />
         </main>
     </div>
}

export default Main;
