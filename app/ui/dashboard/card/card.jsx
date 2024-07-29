import React from 'react'
import styles from './card.module.css'
import { MdSupervisedUserCircle } from 'react-icons/md'
const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24}/>
      <div className={styles.texts}>
      <span className={styles.title}>Totale Dipendenti</span>
      <span className={styles.number}>200</span>
      
      </div>
    </div>
  )
}

export default Card