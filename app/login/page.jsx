
import styles from '../ui/login/login.module.css'
import LoginForm from '../ui/login/loginForm/LoginForm'


function Login() {
  return (
    <div className={styles.container}>
        <LoginForm/>
    </div>
  )
}

export default Login