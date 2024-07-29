import React from 'react'
import styles from './card3.module.css'
import { MdSupervisedUserCircle } from 'react-icons/md'
const Card3 = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24}/>
      <div className={styles.texts}>
      <span className={styles.title}>Totale Documenti</span>
      <span className={styles.number}>4</span>
      
      </div>
    </div>
  )
}

export default Card3