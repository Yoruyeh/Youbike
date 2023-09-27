import styles from './stationsTable.module.scss'
import { TableHeader } from '../../utils/helpers'

const StationsTable = () => {
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
          <tr>
            <td>台北市</td>
            <td>松山區</td>
            <td>
              台北市台北市台北市台北市台北市台北市台北市台北市台北市台北市
              台北市台北市台北市台北市台北市台北市台北市台北市台北市台北市台北市台北市台北市台北市台北市台北市台北市台北市台北市
            </td>
            <td>12</td>
            <td>12</td>
          </tr>
          <tr>
            <td>台北市</td>
            <td>大安區</td>
            <td>台北市台北市台北市台北市台北市</td>
            <td>15</td>
            <td>17</td>
          </tr>
          <tr>
            <td>台北市</td>
            <td>大安區</td>
            <td>台北市台北市台北市台北市台北市</td>
            <td>15</td>
            <td>17</td>
          </tr>
          <tr>
            <td>台北市</td>
            <td>大安區</td>
            <td>台北市台北市台北市台北市台北市</td>
            <td>15</td>
            <td>17</td>
          </tr>
          <tr>
            <td>台北市</td>
            <td>大安區</td>
            <td>台北市台北市台北市台北市台北市</td>
            <td>15</td>
            <td>17</td>
          </tr>
          <tr>
            <td>台北市</td>
            <td>大安區</td>
            <td>台北市台北市台北市台北市台北市</td>
            <td>15</td>
            <td>17</td>
          </tr>
          <tr>
            <td>台北市</td>
            <td>大安區</td>
            <td>台北市台北市台北市台北市台北市</td>
            <td>15</td>
            <td>17</td>
          </tr>
          <tr>
            <td>台北市</td>
            <td>大安區</td>
            <td>台北市台北市台北市台北市台北市</td>
            <td>15</td>
            <td>17</td>
          </tr>
          <tr>
            <td>台北市</td>
            <td>大安區</td>
            <td>台北市台北市台北市台北市台北市</td>
            <td>15</td>
            <td>17</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StationsTable
