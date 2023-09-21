import styles from './checkBox.module.scss'
import { Check } from '../../assets/icons'

const CheckBox = ({ name, value, onChange, checked }) => {
  return (
    <div className={styles.checkbox}>
      <label htmlFor={name}>
        <input
          type="checkbox"
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange?.(e.target.checked)}
          checked={checked}
        />
        <div className={styles.checkboxIcon}>
          <Check />
        </div>
        松山區
      </label>
    </div>
  )
}

export default CheckBox
