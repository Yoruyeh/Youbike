import styles from './stations.module.scss'
import StationsTable from '../components/stationsTable/StationsTable'

const Stations = () => {
  return (
    <div className={styles.stations}>
      <StationsTable />
    </div>
  )
}

export default Stations