import React from 'react';
import styles from './header.module.scss';

const Header = () => {
    return <header>
        <nav className={styles.navLogo}>
            IPC Graph
        </nav>
    </header>
}

export default Header;
