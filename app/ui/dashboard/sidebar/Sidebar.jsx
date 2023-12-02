import styles from '../sidebar/sidebar.module.css'
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLinks from './MenuLinks';
import Image from 'next/image';
import { auth, signOut } from '@/app/auth';

const menuItems = [
  {
    title:"Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];


async function Sidebare() {

  const {user} = await auth()
  console.log(user)
  return (
    <div className={styles.container}>
      <div className={styles.user}>
         <Image className={styles.userImage} src={user.img ||"/noavatar.png"} alt='' width="50" height="50"/>
         <div className={styles.userInfo}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.lastname}>{}</span>
         </div>
      </div>
      <ul className={styles.list}>
      {
        menuItems.map(item=>(
          <li key={item.title}>
            <span className={styles.cat}>{item.title}</span>
            {
              item.list.map(link=>(
                <MenuLinks {...link} key={link.title}/>
              ))
            }
          </li>
        ))
      }
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  )
}

export default Sidebare