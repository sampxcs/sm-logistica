import { Chart } from 'react-google-charts'

const data = [
  ['ENVIADOS POR MES', /* 'CREADOS', */ 'ENVIADOS'],
  ['4/2022', /* 231, */ 265],
  ['5/2022', /* 215, */ 230],
  ['6/2022', /* 269, */ 269],
  ['7/2022', /* 135, */ 138],
  ['8/2022', /* 234, */ 239],
  ['9/2022', /* 196, */ 196],
  ['10/2022', /* 231, */ 231],
  ['11/2022', /* 215, */ 215],
  ['12/2022', /* 269, */ 269],
]

const options = {
  curveType: 'function',
  colors: [/* '#e9625b', */ '#4748ee'],
}

export default function AreaChart() {
  return <Chart options={options} data={data} width="100%" height="300px" chartType="Line" />
}
