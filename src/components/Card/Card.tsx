import React from 'react';
import styles from './card.module.scss';

const Card = ({header, children}) => {

    return <div className={styles.card}>
        <div className={styles.header}>
            {header}
        </div>
        <div className={styles.content}>
            {children}
        </div>
    </div>;
};

export default Card;
