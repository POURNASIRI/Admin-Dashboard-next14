import styles from '@/app/ui/dashboard/users/singleuserpage.module.css'
import Image from 'next/image'

function SingleUserPage() {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src="/noavatar.png" alt='' fill/>
            </div>
            Erfan
        </div>
        <div className={styles.formContainer}>
            <form className={styles.form}>
            <label>Username</label>
            <input type="text" name='username' placeholder='Erfan' />
            <label>Email</label>
            <input type="email" name='email' placeholder='Erfan@gmail.com' />
            <label>Password</label>
            <input type="password" name='password' placeholder='Erfan' />
            <label>Phone</label>
            <input type="number" name='phone' />
            <label>Address</label>
            <textarea name="address" placeholder='NewYork' type="text"></textarea>
            <label>Is Admin?</label>
            <select name="isAdmin" id="isAdmin">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <label>Is Active?</label>
            <select name="isActice" id="isActice">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <button type='submit'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default SingleUserPage