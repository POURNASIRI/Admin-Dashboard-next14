import Search from '@/app/ui/dashboard/search/Search'
import styles from '../../ui/dashboard/users/users.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '../../ui/dashboard/pagination/Pagination'
import { fetchUserData } from '@/app/lib/data'
import { DeleteUser } from '@/app/lib/actions'



async function Users({searchParams}) {


    const q =  searchParams?.q || "" ;
    const page =  searchParams?.page || 1 ;
    const {count,users} = await fetchUserData(q,page)
    

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
              {
                users.map(user=>(
                <tr key={user.id}>
                  <td>
                    <div className={styles.user}>
                    <Image src={user.img || "/noavatar.png"} alt='' width={40} height={40}
                    className={styles.userImage}
                    />
                   { user.username}
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.createdAt?.toString().slice(4,16)}</td>
                  <td>{user.isAdmin ? "Admin" : "Client"}</td>
                  <td>{user.isActive ? "Active" : "Passive"}</td>
                  <td>
                    <div className={styles.buttons}>
                    <Link href={`/dashboard/users/${user._id}`}>
                      <button className={`${styles.button} ${styles.view}`}>View</button>
                    </Link>
                    <form action={DeleteUser}>
                        <input type="text" hidden  name='id' value={user.id}/>
                      <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                    </form>
                    </div>
                  </td>
                </tr>
                ))
              }
          </tbody>
        </table>
        <Pagination count={count}/>
    </div>
  )
}

export default Users