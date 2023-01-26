import React from 'react'
import SocialLinks from '../socialLinks/SocialLinks'
import FooterLinks from '../footerLinks/FooterLinks'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.box}>
            <div className={styles.socialLinks}>
              <SocialLinks /> 
               </div>
            <FooterLinks /> 

        </footer>
        
        
       
  )
}

export default Footer