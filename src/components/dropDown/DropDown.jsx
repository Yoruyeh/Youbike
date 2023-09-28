import styles from './dropDown.module.scss'
import { TaiwanCities } from '../../utils/helpers'

const DropDown = ({ selectedCity, onClick }) => {
  return (
    <div className={styles.dropdown}>
      <ul className={styles.list}>
        {TaiwanCities.map((city) => (
          <li
            className={styles.item}
            key={city.id}
            style={{ color: selectedCity === city.cityName ? '#B5CC22' : '' }}
            onClick={() => onClick(city.cityName)}
          >
            {city.cityName}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DropDown