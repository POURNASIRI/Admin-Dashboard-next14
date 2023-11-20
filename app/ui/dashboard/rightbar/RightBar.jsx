import Image from 'next/image'
import styles from './rightbar.module.css'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

function RightBar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt='' fill className={styles.bg}/>
        </div>
        <div className={styles.text }>
          <span className={styles.notification}>
            🔥 Available Now
          </span>
          <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
          <span className={styles.subtitle}>Take 4 minutes to learn</span>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam veniam officiis iste, sed neque assumenda quod expedita aliquid harum placeat?</p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            Watch
          </button>
        </div>
        </div>
      <div className={styles.item}>
        <div className={styles.text }>
          <span className={styles.notification}>
            🚀 Coming Soon
          </span>
          <h3 className={styles.title}>How Server actions are available, partial pre-rendring is coming up!</h3>
          <span className={styles.subtitle}>Lorem ipsum dolor sit amet.</span>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam veniam officiis iste, sed neque assumenda quod expedita aliquid harum placeat?</p>
          <button className={styles.button}>
            <MdReadMore/>
            Learn
          </button>
        </div>
      </div>
  </div>
  )
}

export default RightBar