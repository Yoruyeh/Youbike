import styles from './stations.module.scss'
import SearchInput from '../components/searchInput/SearchInput'

const Stations = () => {
  return (
    <div className={styles.stations}>
      <h1>Stations</h1>
      <SearchInput placeholder={'搜尋站點'}/>
    </div>
  )
}

export default Stations