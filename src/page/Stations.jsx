import styles from './stations.module.scss'
import CheckBox from '../components/checkBox/CheckBox'

const Stations = () => {
  return (
    <div className={styles.stations}>
      <CheckBox id={'dist'} name={'dist'} />
    </div>
  )
}

export default Stations