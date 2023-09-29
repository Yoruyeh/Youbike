import styles from './dropDown.module.scss'

const SearchInputDropDown = ({ searchedStation, onClick, searchInput }) => {
  return (
    <div className={styles.dropdown}>
      <ul className={styles.list}>
        {searchedStation?.map((station) => (
          <li
            className={styles.item}
            key={station.id}
            style={{
              color:
                station.cityName.includes(searchInput)
                  ? '#B5CC22'
                  : ''
            }}
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
