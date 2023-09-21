import styles from './stations.module.scss'
import SelectButton from '../components/selectButton/SelectButton'
import DropDown from '../components/dropDown/DropDown'

const Stations = () => {
  return (
    <div className={styles.stations}>
      <h1>Stations</h1>
      <div style={{ position: 'relative' }}>
        <SelectButton defaultValue={'台北車站'}>
          <DropDown />
        </SelectButton>
      </div>
    </div>
  )
}

export default Stations