import Search from '@/app/ui/dashboard/search/Search'
import styles from '../../ui/dashboard/users/users.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '../../ui/dashboard/pagination/Pagination'



function Users({placeholder}) {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder={"User"}/>
          <Link href="/dashboard/users/addUser">
            <button className={styles.addButton}>Add New</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Create</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><div className={styles.user}>
                <Image src="/noavatar.png" alt='' width={40} height={40}
                className={styles.userImage}
                />
                Erfan Pm
                </div>
              </td>
              <td>erfan@gmail.com</td>
              <td>13.01.2023</td>
              <td>admin</td>
              <td>active</td>
              <td>
                <div className={styles.buttons}>
                <Link href={'/'}>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination/>
    </div>
  )
}

export default Users