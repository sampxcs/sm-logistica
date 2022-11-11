import { useRef, useState } from 'react'
import styles from './Input.module.css'
import EyeIcon from '../Icons/EyeIcon'
import EyeSlashIcon from '../Icons/EyeSlashIcon'

export default function Input({ type, title, placeholder, onChange, error, required, id, name, info, label, options, pattern }) {
  const [value, setValue] = useState()
  const [inputType, setInputType] = useState(type)

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
        <i className={styles.selectButton}></i>
      </div>
    )

  return (
    <>
      <div className={type == 'radio' || type == 'checkbox' ? styles.radioGroup : value ? styles.activeGroup : styles.group}>
        <input
          pattern={pattern}
          title={title}
          className={`${styles.input} ${error && styles.error}`}
          type={inputType}
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
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}
        {error ? <small className={styles.errorMessage}>{error}</small> : info && <small className={styles.info}>{info}</small>}
        {type === 'password' && (
          <i className={styles.icon} onClick={() => (inputType === 'password' ? setInputType('text') : setInputType('password'))}>
            {inputType === 'password' ? <EyeIcon width={12} /> : <EyeSlashIcon width={13} />}
          </i>
        )}
      </div>
    </>
  )
}
