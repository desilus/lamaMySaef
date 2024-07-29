import React from 'react'
import styles from './card2.module.css'
import { MdSupervisedUserCircle } from 'react-icons/md'
const Card2 = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24}/>
      <div className={styles.texts}>
      <span className={styles.title}>Sedi</span>
      <span className={styles.number}>2</span>
      
      </div>
    </div>
  )
}

export default Card2