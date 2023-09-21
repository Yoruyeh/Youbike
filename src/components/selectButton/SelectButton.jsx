import styles from './selectButton.module.scss'

const SelectButton = ({
  name,
  id,
  value,
  onChange,
  children,
  defaultValue
}) => {
  return (
    <div className={styles.select}>
      <select
        className={styles.selectBtn}
        name={name}
        id={id}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {children}
      </select>
    </div>
  )
}

export default SelectButton
