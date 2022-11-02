import styles from '../../styles/Input.module.css'

export default function Input({ type, placeholder, onChange, required, id, name, info, label }) {
  return <div className={type == 'radio' ? styles.radioContainer : styles.container}>
        {label && <label htmlFor={id} className={styles.label}>{label}</label>}
        <input className={styles.input} type={type} id={id} name={name} placeholder={placeholder} onChange={onChange} required={required} />
        {info && <small className={styles.info}>{info}</small>}
    </div>
}
