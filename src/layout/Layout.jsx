import { NavLink, Outlet } from 'react-router-dom'
import styles from './layout.module.scss'
import { Logo, Menu, Close } from '../assets/icons'
import { navbarItems } from '../utils/helpers'
import { useState } from 'react'

const Layout = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className={styles.app}>
      <header>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav
          className={
            openMenu ? `${styles.opened}` : `${styles.navbar}`
          }
        >
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
                onClick={() => setOpenMenu(false)}
              >
                <li>{item.title}</li>
              </NavLink>
            ))}
          </ul>
          <NavLink to="login" onClick={() => setOpenMenu(false)}>
            <button className={styles.loginbtn}>登入</button>
          </NavLink>
        </nav>
        <div className={styles.menu} onClick={() => setOpenMenu(!openMenu)}>
          {!openMenu ? <Menu /> : <Close />}
        </div>
      </header>
      <hr />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout