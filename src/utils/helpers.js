import { useLocation } from "react-router-dom"

export const navbarItems = [
  {
    id: '1',
    title: '使用說明',
    link: 'guide'
  },
  {
    id: '2',
    title: '收費方式',
    link: 'rate'
  },
  {
    id: '3',
    title: '站點資訊',
    link: 'stations'
  },
  {
    id: '4',
    title: '最新消息',
    link: 'news'
  },
  {
    id: '5',
    title: '活動專區',
    link: 'events'
  }
]

export const TaipeDistricts = [
  {
    id: '1',
    title: '大安區'
  },
  {
    id: '2',
    title: '大同區'
  },
  {
    id: '3',
    title: '士林區'
  },
  {
    id: '4',
    title: '文山區'
  },
  {
    id: '5',
    title: '中正區'
  },
  {
    id: '6',
    title: '中山區'
  },
  {
    id: '7',
    title: '內湖區'
  },
  {
    id: '8',
    title: '北投區'
  },
  {
    id: '9',
    title: '松山區'
  },
  {
    id: '10',
    title: '南港區'
  },
  {
    id: '11',
    title: '信義區'
  },
  {
    id: '12',
    title: '萬華區'
  },
  {
    id: '13',
    title: '臺大公館校區'
  }
]

export const TaiwanCities = [
  {
    id: '1',
    cityName: '宜蘭縣'
  },
  {
    id: '2',
    cityName: '嘉義市'
  },
  {
    id: '3',
    cityName: '屏東縣'
  },
  {
    id: '4',
    cityName: '苗栗縣'
  },
  {
    id: '5',
    cityName: '雲林縣'
  },
  {
    id: '6',
    cityName: '臺東縣'
  },
  {
    id: '7',
    cityName: '臺北市'
  },
  {
    id: '8',
    cityName: '金門縣'
  },
  {
    id: '9',
    cityName: '桃園市'
  },
  {
    id: '10',
    cityName: '彰化縣'
  },
  {
    id: '11',
    cityName: '嘉義縣'
  },
  {
    id: '12',
    cityName: '高雄市'
  },
  {
    id: '13',
    cityName: '基隆市'
  },
  {
    id: '14',
    cityName: '臺南市'
  },
  {
    id: '15',
    cityName: '南投縣'
  },
  {
    id: '16',
    cityName: '臺中市'
  },
  {
    id: '17',
    cityName: '新竹縣'
  },
  {
    id: '18',
    cityName: '花蓮縣'
  },
  {
    id: '19',
    cityName: '連江縣'
  },
  {
    id: '20',
    cityName: '澎湖縣'
  },
  {
    id: '21',
    cityName: '新北市'
  }
]

export const TableHeader = [
  {
    id: '1',
    title: '縣市'
  },
  {
    id: '2',
    title: '區域'
  },
  {
    id: '3',
    title: '站點名稱'
  },
  {
    id: '4',
    title: '可借車輛'
  },
  {
    id: '5',
    title: '可還空位'
  }
]

export const GetPageTitle = () => {
   const { pathname } = useLocation()
   const page = navbarItems.find((item) => pathname.includes(item.link))
   return page.title
}