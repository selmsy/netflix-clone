import React from 'react'
import styles from './BillboardSettings.module.css'
import logo from '../assets/settings.svg'
const BillboardSettings = () => {
  return (
    <div className={styles.billboardSettings}>
     <img className={styles.logo} src={logo} alt="logo" /> 
       <div className={styles.user}>
       
       </div>
       </div>
  )
}

export default BillboardSettings