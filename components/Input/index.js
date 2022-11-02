import { useRef, useState } from 'react'
import styles from '../../styles/Input.module.css'

export default function Input({ type, placeholder, onChange, required, id, name, info, label, options }) {
  const [value, setValue] = useState()

  if (type === 'select')
    return (
      <div className={value ? styles.activeGroup : styles.group}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}
        <select
          className={styles.input}
          onChange={(e) => {
            setValue(e.target.value)
            onChange && onChange(e)
          }}
        >
          <option style={{ display: 'none' }} selected></option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <i></i>
      </div>
    )

  return (
    <div className={type == 'radio' || type == 'checkbox' ? styles.radioGroup : value ? styles.activeGroup : styles.group}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        className={styles.input}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value)
          onChange && onChange(e)
        }}
        required={required}
        autoComplete={false}
      />
      {info && <small className={styles.info}>{info}</small>}
    </div>
  )
}
