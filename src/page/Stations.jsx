import styles from './stations.module.scss'
import StationsTable from '../components/stationsTable/StationsTable'
import { GetPageTitle, TaipeDistricts } from '../utils/helpers'
import SearchInput from '../components/searchInput/SearchInput'
import SelectButton from '../components/selectButton/SelectButton'
import CheckBox from '../components/checkBox/CheckBox'
import DropDown from '../components/dropDown/DropDown'
import { useState } from 'react'
import BikingImg from '../assets/images/image.png'

const Stations = () => {
  const [openDropDown, setOpenDropDown] = useState(false)
  const [selectedCity, setSelectedCity] = useState('臺北市')

  return (
    <div className={styles.stations}>
      <div className={styles.container}>
        <div className={styles.filters}>
          <h1>{GetPageTitle()}</h1>
          <div className={styles.inputWrapper}>
            <SearchInput placeholder={'搜尋站點'} />
            <SelectButton
              defaultValue={selectedCity}
              onClick={() => setOpenDropDown(!openDropDown)}
            >
              {openDropDown && (
                <DropDown
                  selectedCity={selectedCity}
                  onClick={(city) => setSelectedCity(city)}
                />
              )}
            </SelectButton>
          </div>
          <div className={styles.checkboxWrapper}>
            <CheckBox name={'全部勾選'} />
            {TaipeDistricts.map((dist) => (
              <CheckBox key={dist.id} name={dist.title} />
            ))}
          </div>
        </div>
        <div className={styles.image}>
          <img src={BikingImg} alt="biking" />
        </div>
      </div>
      <StationsTable />
    </div>
  )
}

export default Stations