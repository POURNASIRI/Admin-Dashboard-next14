


import { authentication } from '../lib/actions'
import styles from '../ui/login/login.module.css'

function Login() {
  return (
    <div className={styles.container}>
      <form action={authentication} className={styles.form}>
      <h1>Login</h1>
          <input type="text" placeholder='username' name='username'/>
          <input type="password" placeholder='password' name='password' />
          <button>Login</button>
      </form>
    </div>
  )
}

export default Login