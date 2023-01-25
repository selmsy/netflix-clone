import React from 'react'
import styles from './SecondaryNavigation.module.css'
import Search from '../search/Search'
import Notifications from '../notifications/Notifications'
import UserMenu from '../menu'
import BilboardSettings from '../bilboardSettings'

const SecondaryNavigation = () => {
  return (
    <div className={styles.SecondaryNavigation}>
       <Search/>
        <Notifications/> 
        <UserMenu/> 
       <BilboardSettings/> 

        </div>
  )
}

export default SecondaryNavigation