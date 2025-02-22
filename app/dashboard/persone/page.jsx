import React from 'react'
import styles from '/app/ui/dashboard/users/users.module.css'
import Search from '/app/ui/dashboard/search/search'
import Pagination from '/app/ui/dashboard/pagination/pagination'
import Link from 'next/link'
import Image from 'next/image'
import { fetchUsers } from '/app/lib/data'
import { deleteUser } from "/app/lib/actions"

const Persone =   async({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {count, users} = await fetchUsers(q, page);
  

  
  // console.log(users)

  // () => {
  // async() => {
  // const users = await fetchUsers();
  // console.log(users)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..."/>
        <Link href="/dashboard/persone/add">
        <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nome</td>

            <td>Creato Il</td>
            <td>Ruolo</td>
            <td>Corso</td>
            <td>Azione</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user)=>(

            <tr key={user.id}>
            <td><div className={styles.user}>
              <Image src={user.img || "/noavatar.png" }
              alt="" 
              width={40} 
              height={40} 
              className={styles.userImage} />
              {user.username}
              </div>
              </td>
              <td>{user.createdAt?.toString().slice(4,16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "attivo" : "non attivo"}</td>
              <td>
                <div className={styles.buttons}>

                <Link href={`/dashboard/persone/${user.id}`}>
                <button className={`${styles.button} ${styles.view}`}>Visualizza</button>
                </Link>
                <form action={deleteUser}>
                  <input type='hidden' name='id' value={user.id}/>
                <button className={`${styles.button} ${styles.delete}`}>Cancella</button>
                </form>
                </div>
              </td>
          </tr>
            ))}
        </tbody>
      </table>
      <Pagination count={count} />
      {/* count={count} */}
    </div>
  )
}

export default Persone