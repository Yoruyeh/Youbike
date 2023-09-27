import styles from './selectButton.module.scss'
import { ArrowDown } from '../../assets/icons'

const SelectButton = ({
  defaultValue, children, onClick
}) => {
  return (
    <div className={styles.selectBtn} onClick={onClick}>
      {defaultValue}
      <ArrowDown />
      {children}
    </div>
  )
}

export default SelectButton
