import styles from './AnimationBackground.module.css'

export default function AnimationBackground() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin slice" viewBox="24 105 156 95" className={styles.svg}>
      <defs>
        <style type="text/css"></style>
      </defs>
      <rect x="0" y="0" width="300" height="300" fill="#fff" />
      <path
        className={styles.top}
        fill="#3d3ec3"
        d="M68 1c23,0 67,17 69,39 4,38 5,52 -5,69 -20,36 -68,46 -120,-9 -27,-28 -7,-101 56,-99z"
      />

      <path
        className={styles.bottom}
        fill="#3d3ec3"
        d="M158 158c30,13 56,50 44,75 -9,18 -22,46 -42,55 -20,10 -48,2 -73,-19 -29,-25 -27,-55 -9,-79 17,-22 43,-48 80,-32z"
      />
    </svg>
  )
}
