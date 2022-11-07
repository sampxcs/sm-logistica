const CircleDollarIcon = (props) => (
  <svg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path fill='none' d='M0 0h256v256H0z' />
    <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={12} d='M128 72v16M128 168v16' />
    <circle cx={128} cy={128} fill='none' r={96} stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={12} />
    <path
      d='M104 168h36a20 20 0 0 0 0-40h-24a20 20 0 0 1 0-40h36'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={12}
    />
  </svg>
)

export default CircleDollarIcon
