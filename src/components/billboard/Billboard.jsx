import React from 'react'
import styles from './Billboard.module.css'
import PlayIcon from './PlayIcon';
import InfoIcon from './InfoIcon';

import billboardImg from './assets/billboard.webp'
import billboardTitle from './assets/billboard-title.webp'

const Billboard = () => {
  return (
    <div className={styles.billboard}>
      <div className={styles.innerBillboard}>
<img src={billboardImg} alt="text" />
<div className={styles.fadeOut}></div>
<div className={styles.info}>
<img src={billboardTitle} alt="text" />
<div className={styles.description}>
  Random description about title.
</div>
<div className={styles.links}>
<a href="/">
<PlayIcon />
<span>Play</span>
</a>
<button type="button">
<InfoIcon />
<span>More Info</span>
</button>
</div>
</div>
      </div>
        </div>
  )
}

export default Billboard