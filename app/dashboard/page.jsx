import React from 'react';
import Card from '../ui/dashboard/card/card';
import Card2 from '../ui/dashboard/card2/card2';
import Card3 from '../ui/dashboard/card3/card3';
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transaction from "../ui/dashboard/transaction/transaction"
import Chart from "../ui/dashboard/chart/chart"

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
      <div className={styles.cards}>
       <Card/>
       <Card2/>
       <Card3/>
      </div>
      <Transaction/>
      <Chart/>
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  )
}

export default Dashboard