import styles from './stations.module.scss'
import StationsTable from '../components/stationsTable/StationsTable'
import { GetPageTitle, TaipeiDistricts } from '../utils/helpers'
import SearchInput from '../components/searchInput/SearchInput'
import SelectButton from '../components/selectButton/SelectButton'
import CheckBox from '../components/checkBox/CheckBox'
import DropDown from '../components/dropDown/DropDown'
import { useEffect, useState } from 'react'
import BikingImg from '../assets/images/image.png'
import Main from '../api/process-rawData'

const Stations = () => {
  const [openDropDown, setOpenDropDown] = useState(false)
  const [selectedCity, setSelectedCity] = useState('臺北市')
  const [stationsData, setStationsData] = useState([])
  // const [selectedArea, setSelectedArea] = useState([])

  // const handleCheck = (e) => {
  //   const isChecked = e.checked
  //   const value = e.value
  //   if (isChecked) {
  //     setSelectedArea((prev) => [...prev, value])
  //   } 
  //   if (!isChecked) {
  //     setSelectedArea((prev) => {
  //       return (
  //         prev.filter(item => item !== value)
  //       )
  //     })
  //   }
  // }

  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await Main()
      setStationsData(data.location)
    }
    fetchDataAsync()
  }, [])

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
            {selectedCity === '臺北市' &&
              TaipeiDistricts.map((dist) => (
                <CheckBox
                  key={dist.id}
                  name={dist.title}
                  // onChange={(e) => handleCheck(e)}
                />
              ))}
          </div>
        </div>
        <div className={styles.image}>
          <img src={BikingImg} alt="biking" />
        </div>
      </div>
      <StationsTable
        selectedCity={selectedCity}
        stationsData={stationsData}
      />
    </div>
  )
}

export default Stations