import React from 'react';
import logo from './assets/twitter.svg'
import styles from './TwitterIcon.module.css'
const TwitterIcon = () => (
    <img className={styles.logo} src={logo} alt="logo" />
);

export default TwitterIcon;