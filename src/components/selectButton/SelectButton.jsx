import styles from './selectButton.module.scss'
import { ArrowDown } from '../../assets/icons'

const SelectButton = ({
  defaultValue
}) => {
  return (
    <div className={styles.selectBtn}>
      {defaultValue}
      <ArrowDown />
    </div>
  )
}

export default SelectButton
