import styles from './stations.module.scss'
import StationsTable from '../components/stationsTable/StationsTable'
import { GetPageTitle, TaipeDistricts } from '../utils/helpers'
import SearchInput from '../components/searchInput/SearchInput'
import SelectButton from '../components/selectButton/SelectButton'
import CheckBox from '../components/checkBox/CheckBox'
import DropDown from '../components/dropDown/DropDown'
import { useState } from 'react'

const Stations = () => {
  const [openDropDown, setOpenDropDown] = useState(false)

  return (
    <div className={styles.stations}>
      <div className={styles.filters}>
        <h1>{GetPageTitle()}</h1>
        <div className={styles.inputWrapper}>
          <SearchInput placeholder={'搜尋站點'} />
          <SelectButton
            defaultValue={'台灣大學'}
            onClick={() => 
              setOpenDropDown(!openDropDown)}
          >
            {openDropDown && <DropDown />}
          </SelectButton>
        </div>
        <div className={styles.checkboxWrapper}>
          <CheckBox name={'全部勾選'} />
          {TaipeDistricts.map((dist) => (
            <CheckBox key={dist.id} name={dist.title} />
          ))}
        </div>
      </div>
      <StationsTable />
    </div>
  )
}

export default Stations