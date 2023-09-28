import styles from './checkBox.module.scss'
import { Check } from '../../assets/icons'

const CheckBox = ({ name, onChange, checked }) => {
  return (
    <div className={styles.checkbox}>
      <label htmlFor={name}>
        <input
          type="checkbox"
          id={name}
          name={name}
          value={name}
          onChange={(e) => onChange?.(e.target)}
          checked={checked}
        />
        <div className={styles.checkboxIcon}>
          <Check />
        </div>
        {name}
      </label>
    </div>
  )
}

export default CheckBox
