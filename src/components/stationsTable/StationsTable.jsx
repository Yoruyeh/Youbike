import styles from './stationsTable.module.scss'
import { TableHeader } from '../../utils/helpers'

const StationsTable = ({ selectedCity, stationsData }) => {
  return (
    <div className={styles.table}>
      <table>
        <thead className={styles.head}>
          <tr>
            {TableHeader.map((item) => (
              <th key={item.id}>{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.body}>
          {stationsData?.length > 0 &&
            stationsData.map((data) => (
              <tr key={data.id}>
                <td>{selectedCity}</td>
                <td>{data.area}</td>
                <td>{data.name}</td>
                <td>{data.rent_available}</td>
                <td>{data.return_available}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default StationsTable
