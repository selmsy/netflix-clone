import React from 'react'
import styles from './UserMenu.module.css'
import logo from '../assets/info.svg'
const UserMenu = () => {
  return (
    <div className={styles.menu}>
      <img className={styles.logo} src={logo} alt="logo" />
        </div>
  )
}

export default UserMenu