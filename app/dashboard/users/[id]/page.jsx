



import { UpdateUser } from '@/app/lib/actions'
import { fetchSingleUserData } from '@/app/lib/data'
import styles from '@/app/ui/dashboard/users/singleuserpage.module.css'
import Image from 'next/image'



 async function SingleUserPage({params}) {

    const {id} = params
    const singleUser = await fetchSingleUserData (id)
    
    console.log(singleUser.phoneNumber)
       
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src={singleUser.img || "/noavatar.png"} alt='' fill/>
            </div>
            {singleUser.username}
        </div>
        <div className={styles.formContainer}>
            <form action={UpdateUser} className={styles.form}>
                <input type="text" hidden name='id' value={singleUser.id} />
            <label>Username</label>
            <input type="text" name='username' placeholder={singleUser.username} />
            <label>Email</label>
            <input type="email" name='email' placeholder={singleUser.email} />
            <label>Password</label>
            <input type="password" name='password' placeholder={singleUser.password} />
            <label>Phone</label>
            <input type="number" name="phoneNumber" placeholder={singleUser.phoneNumber} />
            <label>Address</label>
            <textarea name="address" placeholder={singleUser.address} type="text">
                
            </textarea>
            <label>Is Admin?</label>
            <select name="isAdmin" id="isAdmin">
                <option value={true} selected={singleUser.isAdmin}>Yes</option>
                <option value={false} selected={!singleUser.isAdmin}>No</option>
            </select>
            <label>Is Active?</label>
            <select name="isActive" id="isActive">
                <option value={true} selected={singleUser.isActive}>Yes</option>
                <option value={false} selected={!singleUser.isActive}>No</option>
            </select>
            <button type='submit'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default SingleUserPage