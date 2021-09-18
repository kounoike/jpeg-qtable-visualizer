import styles from '../styles/Home.module.css'

const QTable: React.FC<{ dqt: Array<number>; name: string }> = props => {
  const dqt = props.dqt
  return (
    <table className={styles.qtable}>
      <thead>
        <tr>
          <th colSpan={8}>{props.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{dqt[0]}</td>
          <td>{dqt[1]}</td>
          <td>{dqt[2]}</td>
          <td>{dqt[3]}</td>
          <td>{dqt[4]}</td>
          <td>{dqt[5]}</td>
          <td>{dqt[6]}</td>
          <td>{dqt[7]}</td>
        </tr>
        <tr>
          <td>{dqt[8]}</td>
          <td>{dqt[9]}</td>
          <td>{dqt[10]}</td>
          <td>{dqt[11]}</td>
          <td>{dqt[12]}</td>
          <td>{dqt[13]}</td>
          <td>{dqt[14]}</td>
          <td>{dqt[15]}</td>
        </tr>
        <tr>
          <td>{dqt[16]}</td>
          <td>{dqt[17]}</td>
          <td>{dqt[18]}</td>
          <td>{dqt[19]}</td>
          <td>{dqt[20]}</td>
          <td>{dqt[21]}</td>
          <td>{dqt[22]}</td>
          <td>{dqt[23]}</td>
        </tr>
        <tr>
          <td>{dqt[24]}</td>
          <td>{dqt[25]}</td>
          <td>{dqt[26]}</td>
          <td>{dqt[27]}</td>
          <td>{dqt[28]}</td>
          <td>{dqt[29]}</td>
          <td>{dqt[30]}</td>
          <td>{dqt[31]}</td>
        </tr>
        <tr>
          <td>{dqt[32]}</td>
          <td>{dqt[33]}</td>
          <td>{dqt[34]}</td>
          <td>{dqt[35]}</td>
          <td>{dqt[36]}</td>
          <td>{dqt[37]}</td>
          <td>{dqt[38]}</td>
          <td>{dqt[39]}</td>
        </tr>
        <tr>
          <td>{dqt[40]}</td>
          <td>{dqt[41]}</td>
          <td>{dqt[42]}</td>
          <td>{dqt[43]}</td>
          <td>{dqt[44]}</td>
          <td>{dqt[45]}</td>
          <td>{dqt[46]}</td>
          <td>{dqt[47]}</td>
        </tr>
        <tr>
          <td>{dqt[48]}</td>
          <td>{dqt[49]}</td>
          <td>{dqt[50]}</td>
          <td>{dqt[51]}</td>
          <td>{dqt[52]}</td>
          <td>{dqt[53]}</td>
          <td>{dqt[54]}</td>
          <td>{dqt[55]}</td>
        </tr>
        <tr>
          <td>{dqt[56]}</td>
          <td>{dqt[57]}</td>
          <td>{dqt[58]}</td>
          <td>{dqt[59]}</td>
          <td>{dqt[60]}</td>
          <td>{dqt[61]}</td>
          <td>{dqt[62]}</td>
          <td>{dqt[63]}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default QTable
