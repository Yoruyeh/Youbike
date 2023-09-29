import styles from './dropDown.module.scss'

const SearchInputDropDown = ({ searchedStation, onClick }) => {
  return (
    <div className={styles.dropdown}>
      <ul className={styles.list}>
        {searchedStation?.map((station) => (
          <li
            className={styles.item}
            key={station.id}
            onClick={() => onClick(station.cityName)}
          >
            {station.cityName}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchInputDropDown
