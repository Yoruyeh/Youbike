import styles from './searchInput.module.scss'
import { Search, Close } from '../../assets/icons'

const SearchInput = ({
  placeholder,
  value,
  onChange,
  children,
  searchInputRef,
  isFocused
}) => {
  return (
    <div className={styles.search}>
      <input
        ref={searchInputRef}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target)}
      />
      {isFocused && value && (
        <div className={styles.icon}>
          <Close />
        </div>
      )}
      {(!isFocused || !value) && <Search />}
      {children}
    </div>
  )
}

export default SearchInput