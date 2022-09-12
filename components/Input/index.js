import styles from '../../styles/Input.module.css'

export default function Input({ type, placeholder, onChange }) {
  return <input className={styles.input} type={type} placeholder={placeholder} onChange={onChange} />
}
