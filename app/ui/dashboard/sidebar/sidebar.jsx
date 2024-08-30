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
  MdLogout,
} from "react-icons/md"
import Image from 'next/image';
import { signOut, auth } from '../../../auth';

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
      path: "/dashboard/sedi2",
      icon: <MdDashboard/>,
    },
    {
      title: "Sedi",
      path: "/dashboard/sedi3",
      icon: <MdSupervisedUserCircle/>,
    },
    {
      title: "Persone",
      path: "/dashboard/sedi4",
      icon: <MdShoppingBag/>,
    },    
  ],
},
{
  title: "Persone",
  list: [
    {
      title: "Aziende",
      path: "/dashboard/sedi5",
      icon: <MdSupervisedUserCircle/>,
    },
    {
      title: "Sedi",
      path: "/dashboard/sedi6",
      icon: <MdShoppingBag/>,
    },
    {
      title: "Persone",
      path: "/dashboard/sedi7",
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

const Sidebar = async () => {

  const {user} = await auth();
    // console.log(session)

  return (
    <div className={styles.container}>
    <div className={styles.user}>
      <Image className={styles.userImage} src={user.img || "/noavatar.png"} alt="" width='50' height="50"/>
      <div className={styles.userDetail}>
          <span className={styles.username}>{user.username}</span>
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
      <form action={async ()=>{
        "use server"
        await signOut();
      }}>
      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
      </form>
    </div>
  );
};

export default Sidebar