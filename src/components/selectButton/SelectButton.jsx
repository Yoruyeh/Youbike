import styles from './selectButton.module.scss'
import { ArrowDown } from '../../assets/icons'

const SelectButton = ({
  defaultValue, children
}) => {
  return (
    <div className={styles.selectBtn}>
      {defaultValue}
      <ArrowDown />
      {children}
    </div>
  )
}

export default SelectButton
