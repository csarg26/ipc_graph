import React from 'react';
import styles from './main.module.scss';
import Header from '../../components/Header';

const Main: React.FunctionComponent = () => {
 return <div className={styles.wrapper}>
        <Header />
     </div>
}

export default Main;
