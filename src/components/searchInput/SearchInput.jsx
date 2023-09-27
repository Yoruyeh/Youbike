import styles from './searchInput.module.scss'
import { Search } from '../../assets/icons'

const SearchInput = ({ placeholder, value, name, onChange, children }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={(e) => onChange?.(e)}
      />
      <Search />
      {children}
    </div>
  )
}

export default SearchInput