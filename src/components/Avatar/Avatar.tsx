import React from 'react';
import {
    usePopoverState,
    Popover,
    PopoverDisclosure,
    PopoverArrow,
  } from "reakit/Popover";

import { FaUserAstronaut } from 'react-icons/fa';

import styles from './avatar.module.scss';
import { useAuthDataContext } from '../../context/AuthDataProvider';
  

const Avatar = () => {
    const popover = usePopoverState();
    const { onLogout } = useAuthDataContext();
    return <aside className={styles.avatar}>
        <PopoverDisclosure {...popover}>
            <FaUserAstronaut />
        </PopoverDisclosure>
        <Popover {...popover} className={styles.popup} aria-label="Logout">
            <PopoverArrow {...popover} className={styles.arrow} />
            <a href="#" onClick={()=>onLogout()}>Logout</a>
        </Popover>
    </aside>;
};

export default Avatar;
