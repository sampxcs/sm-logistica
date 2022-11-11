import styles from './Spinner.module.css'

export default function Spinner({ light }) {
  return <div className={`${styles.spinner} ${light && styles.light}`}></div>
}
