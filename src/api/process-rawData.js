import axios from "axios"

const ProcessData = async (rawData) => {
  const cityName = '臺北市'

  const areaName = Array.from(new Set(rawData.map(data => {
    return data.sarea
  })))

  const stationData = areaName.map(area => {
    const stations = rawData.filter(data => {
      return data.sarea === area
    }).map(data => {
      const stationName = data.sna.slice(11)
      return {
        id: data.sno,
        area: data.sarea,
        name: stationName,
        address: data.ar,
        total: data.tot,
        rent_available: data.sbi,
        return_available: data.bemp,
        isOperating: data.act
      }
    })
    return {
      areaName: area,
      stations
    }
  })

  return {
    cityName,
    location: stationData
  }
}

const Main = async () => {
  try {
    const { data } = await axios.get(
      'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'
    )
    
    const processedData = await ProcessData(data)
    return processedData
    
  } catch (error) {
    console.error('[Process Raw Data error]', error)
  }
}

export default Main
