import { NavLink, Outlet } from 'react-router-dom'
import styles from './layout.module.scss'
import { Logo, Menu } from '../assets/icons'
import { navbarItems } from '../utils/helpers'

const Layout = () => {
  return (
    <div className={styles.app}>
      <header>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            {navbarItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navItem} ${styles.active}`
                    : `${styles.navItem}`
                }
              >
                <li>{item.title}</li>
              </NavLink>
            ))}
          </ul>
        </nav>
        <div className={styles.menu}>
          <Menu />
        </div>
        <button className={styles.loginbtn}>登入</button>
      </header>
      <hr />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout