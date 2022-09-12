import styles from '../../styles/Button.module.css'

export default function Button({ children, type }) {
  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  )
}
