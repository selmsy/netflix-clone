import React from 'react'
import styles from './SecondaryNavigation.module.css'
import Search from '../search'
import Notifications from '../notifications'
import UserMenu from '../userMenu'
import BillboardSettings from '../billboardSettings'

const SecondaryNavigation = () => {
  return (
    <div className={styles.secondNav}>
    <div className={styles.navItem}>

    </div>
         
         <Search/>
        <div className={styles.navItem}>
<Notifications/> 
        </div>
        <div className={styles.navItem}>
  <UserMenu/> 
        </div>
      <div className={styles.navItem}>
<BillboardSettings/>
      </div>
        
        
        </div>
  )
}

export default SecondaryNavigation