import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.main}>
      <h1>Layout</h1>
      <Outlet />
    </div>
  )
}

export default Layout