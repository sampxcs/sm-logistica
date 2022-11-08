import { Chart } from 'react-google-charts'

const data = [
  ['ESTADO', 'PENDIENTES'],
  ['PENDIENTES', 16],
  ['CANCELADOS', 32],
  ['DEVOLUCIONES', 23],
]

const options = {
  pieHole: 0.4,
  colors: ['#4748ee', '#ff1744', '#e9625b'],
}

export default function PieChart() {
  return <Chart options={options} data={data} width="100%" height="360px" chartType="PieChart" />
}
