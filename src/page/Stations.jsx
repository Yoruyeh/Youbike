import styles from './stations.module.scss'
import SelectButton from '../components/selectButton/SelectButton'

const Stations = () => {
  return (
    <div className={styles.stations}>
      <h1>Stations</h1>
      <SelectButton defaultValue={'台北車站'}>
      </SelectButton>
    </div>
  )
}

export default Stations