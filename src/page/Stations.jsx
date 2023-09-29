import styles from './stations.module.scss'
import StationsTable from '../components/stationsTable/StationsTable'
import { GetPageTitle, TaiwanCities } from '../utils/helpers'
import SearchInput from '../components/searchInput/SearchInput'
import SelectButton from '../components/selectButton/SelectButton'
import CheckBox from '../components/checkBox/CheckBox'
import SelectCityDropDown from '../components/dropDown/SelectCityDropDown'
import { useEffect, useRef, useState } from 'react'
import BikingImg from '../assets/images/image.png'
import Main from '../api/process-rawData'
import SearchInputDropDown from '../components/dropDown/SearchInputDropDown'

const Stations = () => {
  const [openDropDown, setOpenDropDown] = useState(false)
  const [selectedCity, setSelectedCity] = useState('臺北市')
  const [stationsData, setStationsData] = useState([])
  const [checkedArea, setCheckedArea] = useState([])
  const [checkAll, setCheckAll] = useState(true)
  const [selectedArea, setSelectedArea] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [searchedStation, setSearchedStation] = useState([])
  const searchInputRef = useRef(null)
  
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

    if (areas.length === 13) {
      setCheckAll(true)
    }
  }

  const handleSearch = (keyword) => {
    setSearchInput(keyword)
    if (!keyword) {
      setSearchedStation([])
      return
    }
    const searched = TaiwanCities.filter(city => city.cityName.includes(keyword))
    setSearchedStation(searched)
  }

  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await Main(selectedArea)
      setStationsData(data)
    }
    fetchDataAsync()
  }, [selectedArea])

  useEffect(() => {
    const areaArr = TaiwanCities.filter(
      (data) => data.cityName === selectedCity
    )[0].districts
    setSelectedArea(areaArr)
    setCheckedArea(
      areaArr.map((item) => {
        return {
          [item]: true
        }
      })
    )
  }, [selectedCity])

   useEffect(() => {
     const handleClickOutside = (e) => {
       if (
         searchInputRef.current &&
         !searchInputRef.current.contains(e.target)
       ) {
         setSearchedStation([])
       }
     }

     document.addEventListener('mousedown', handleClickOutside)
     // 移除監聽
     return () => {
       document.removeEventListener('mousedown', handleClickOutside)
     }
   }, [])

  return (
    <div className={styles.stations}>
      <div className={styles.container}>
        <div className={styles.filters}>
          <h1>{GetPageTitle()}</h1>
          <div className={styles.inputWrapper}>
            <SearchInput
              searchInputRef={searchInputRef}
              placeholder={'搜尋站點'}
              value={searchInput}
              onChange={(e) => handleSearch(e.value)}
              onClick={() => {
                setSearchInput('')
                setSearchedStation([])
              }}
            >
              {searchedStation?.length > 0 && (
                <SearchInputDropDown
                  searchedStation={searchedStation}
                  searchInput={searchInput}
                  onClick={(city) => {
                    setSearchInput(city)
                    setSearchedStation([])
                  }}
                />
              )}
            </SearchInput>
            <SelectButton
              defaultValue={selectedCity}
              onClick={() => setOpenDropDown(!openDropDown)}
            >
              {openDropDown && (
                <SelectCityDropDown
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
            {checkedArea?.map((area) => (
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