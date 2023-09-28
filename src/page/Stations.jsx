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
  const [selectedArea, setSelectedArea] = useState([])
  const [checkedArea, setCheckedArea] = useState(
    TaipeiDistricts.map((dist) => {
      return {
        [dist.title]: false
      }
    })
  )
  const [checkAll, setCheckAll] = useState(false)

  const handleCheck = (e) => {
    const { value, checked } = e
    if (value === '全部勾選') {
      setCheckAll(checked)
      const updatedArea = checkedArea.map((area) => {
        let key = Object.keys(area)[0]
        return {
          [key]: checked
        }
      })
      setCheckedArea(updatedArea)

      const areas = updatedArea
        .filter((area) => Object.values(area)[0] === true)
        .map((item) => Object.keys(item)[0])
      setSelectedArea(areas)

      return
    } 

    if (value !== '全部勾選' && checkAll) {
      setCheckAll(false)
    }
    
    const updatedArea = checkedArea.map((area) => {
      if (value in area) {
        return {
          [value]: checked
        }
      } else {
        return area
      }
    })
    setCheckedArea(updatedArea)
  
    const areas = updatedArea
      .filter((area) => Object.values(area)[0] === true)
      .map((item) => Object.keys(item)[0])
    setSelectedArea(areas)
  }

  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await Main(selectedArea)
      setStationsData(data)
    }
    fetchDataAsync()
  }, [selectedArea])

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
            <CheckBox
              name={'全部勾選'}
              onChange={(e) => handleCheck(e)}
              checked={checkAll}
            />
            {selectedCity === '臺北市' &&
              checkedArea.map((area) => (
                <CheckBox
                  key={Object.keys(area)[0]}
                  name={Object.keys(area)[0]}
                  onChange={(e) => handleCheck(e)}
                  checked={Object.values(area)[0]}
                />
              ))}
          </div>
        </div>
        <div className={styles.image}>
          <img src={BikingImg} alt="biking" />
        </div>
      </div>
      <StationsTable selectedCity={selectedCity} stationsData={stationsData} />
    </div>
  )
}

export default Stations