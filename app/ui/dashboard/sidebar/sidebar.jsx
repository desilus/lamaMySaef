import React from 'react'
import styles from "./sidebar.module.css"
import MenuLink from './menuLink/menuLink'
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdOutlineSettings,
  MdHelpCenter,
} from "react-icons/md"
import Image from 'next/image';

const menuItems = [{
  title: "Pages",
  list: [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <MdDashboard/>,
    },
    {
      title: "Aziende",
      path: "/dashboard/aziende",
      icon: <MdSupervisedUserCircle/>,
    },
    {
      title: "Sedi",
      path: "/dashboard/sedi",
      icon: <MdShoppingBag/>,
    },
    {
      title: "Persone",
      path: "/dashboard/persone",
      icon: <MdAttachMoney/>,
    },
    
  ],
  
},
{
  title: "Sedi",
  list: [
    {
      title: "Aziende",
      path: "/dashboard",
      icon: <MdDashboard/>,
    },
    {
      title: "Sedi",
      path: "/dashboard/",
      icon: <MdSupervisedUserCircle/>,
    },
    {
      title: "persone",
      path: "/dashboard/",
      icon: <MdShoppingBag/>,
    },    
  ],
},
{
  title: "Persone",
  list: [
    {
      title: "Aziende",
      path: "/dashboard/",
      icon: <MdSupervisedUserCircle/>,
    },
    {
      title: "Sedi",
      path: "/dashboard/",
      icon: <MdShoppingBag/>,
    },
    {
      title: "Persone",
      path: "/dashboard/",
      icon: <MdAttachMoney/>,
    },
    
  ],
  
},
{
  title: "User",
  list: [
    {
      title: "Settings",
      path: "/dashboard/settings",
      icon: <MdOutlineSettings/>,
    },
    {
      title: "Help",
      path: "/dashboard/help",
      icon: <MdHelpCenter/>,
    },
    
    
  ],
  
},
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
    <div className={styles.user}>
      <Image className={styles.userImage} src="/noavatar.png" alt="" width='50' height="50"/>
      <div className={styles.userDetail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.userTitle}>ADMINISTRATOR</span>
      </div>
    </div>
      <ul className={styles.list}>
      {menuItems.map(cat=>(
        <li key={cat.title}>
        <span className={styles.cat}>{cat.title}</span>
        {cat.list.map(item =>(
          <MenuLink item={item} key={item.title} />
        ))}
        </li>
    ))}
      </ul>
    </div>
  );
};

export default Sidebar