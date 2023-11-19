import styles from '../ui/dashboard/dashboard.module.css'
import RightBar from '../ui/dashboard/rightbar/RightBar'
import TranSection from '../ui/dashboard/transection/TranSection'
import Chart from '../ui/dashboard/chart/Chart'
import Card from '../ui/dashboard/card/Card'


function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cart}>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div className={""}>
          <TranSection/>
        </div>
        <div>
          <Chart/>
          </div>
      </div>
      <div className={styles.side}>
        <RightBar/>
      </div>
    </div>

  )
}

export default Dashboard