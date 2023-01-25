import React from 'react'
import styles from './Search.module.css'
import search from '../assets/search.svg'
const Search = ()  => {
  return (
    <div className={styles.search}>
       <img className={styles.searchLogo} src={search} alt="search" />
        </div>
  )
}

export default Search