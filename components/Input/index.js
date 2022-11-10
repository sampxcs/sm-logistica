import { useRef, useState } from 'react'
import styles from '../../styles/Input.module.css'

export default function Input({ type, title, placeholder, onChange, error, required, id, name, info, label, options, pattern }) {
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
        pattern={pattern}
        title={title}
        className={`${styles.input} ${error && styles.error}`}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value)
          onChange && onChange(e)
        }}
        required={required}
        autoComplete={'false'}
      />
      {error ? <small className={styles.errorMessage}>{error}</small> : info && <small className={styles.info}>{info}</small>}
    </div>
  )
}
