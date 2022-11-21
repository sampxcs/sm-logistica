import styles from './Input.module.css'
import { useState } from 'react'

export default function InputSelect({ defaultValue, error, id, required, name, options, info, selected, label, onChange }) {
  const [value, setValue] = useState(defaultValue || '')
  return (
    <div className={value ? styles.activeGroup : styles.group}>
      <select
        className={`${styles.input} ${error && styles.error}`}
        id={id}
        name={name}
        required={required}
        onChange={(e) => {
          setValue(e.target.value)
          onChange && onChange(e)
        }}
      >
        <option style={{ display: 'none' }}></option>
        {options.map((option) => (
          <option key={option} selected={option === selected} value={option}>
            {option}
          </option>
        ))}
      </select>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <i className={styles.selectButton}></i>
      {error ? <small className={styles.errorMessage}>{error}</small> : info && <small className={styles.info}>{info}</small>}
    </div>
  )
}
