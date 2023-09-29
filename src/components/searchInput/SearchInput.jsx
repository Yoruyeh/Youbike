import styles from './searchInput.module.scss'
import { Search, Close } from '../../assets/icons'

const SearchInput = ({
  placeholder,
  value,
  onChange,
  children,
  searchInputRef,
  onClick
}) => {
  return (
    <div className={styles.search} ref={searchInputRef}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target)}
      />
      {value ? (
        <div className={styles.icon} onClick={onClick}>
          <Close />
        </div>
      ) : (
        <Search />
      )}
      {children}
    </div>
  )
}

export default SearchInput