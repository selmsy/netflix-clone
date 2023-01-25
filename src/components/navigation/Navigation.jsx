import React from "react";
import styles from './Navigation.module.css';
import logo from './assets/logo.png'
import SecondaryNavigation from "../secondaryNavigation/SecondaryNavigation";
const Navigation = () => {
const navItems = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My list']

return (
    <div className={styles.navigation}>
        <img className={styles.logo} src={logo} alt="logo" />
        <ul className={styles.navigationList}>
           {navItems.map(item => (
<li className={styles.navigationItem} key={item}>
  {item}  
</li>

           ))}
          
        </ul>
        <SecondaryNavigation/>
    </div>
)
}

export default Navigation;