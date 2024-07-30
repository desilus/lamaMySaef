import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}> 
        <div className={styles.logo}> SAEF </div>
        <div className={styles.text}>+ valore con le tue persone</div>
    </div>
  )
}

export default Footer