import styles from './stations.module.scss'
import StationsTable from '../components/stationsTable/StationsTable'
import { GetPageTitle } from '../utils/helpers'

const Stations = () => {
  return (
    <div className={styles.stations}>
      <h1>{GetPageTitle()}</h1>
      <StationsTable />
    </div>
  )
}

export default Stations