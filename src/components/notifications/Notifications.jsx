import React from 'react'
import styles from './Notifications.module.css'
import logo from '../assets/bell.svg'
const Notifications = () => {
  return (
    <div className={styles.notifs}>
      <img className={styles.logo} src={logo} alt="logo" />
        </div>
  )
}

export default Notifications