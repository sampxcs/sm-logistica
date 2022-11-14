import { useRef, useState } from 'react'
import styles from './Input.module.css'
import EyeIcon from '../Icons/EyeIcon'
import EyeSlashIcon from '../Icons/EyeSlashIcon'

export default function Input({
  defaultValue,
  disabled,
  error,
  id,
  info,
  label,
  name,
  onChange,
  options,
  pattern,
  placeholder,
  required,
  title,
  autofocus,
  type,
  checked,
}) {
  const [value, setValue] = useState(defaultValue || '')
  const [inputType, setInputType] = useState(type)

  if (type === 'select')
    return (
      <div className={value ? styles.activeGroup : styles.group}>
        <select
          className={`${styles.input} ${error && styles.error}`}
          id={id}
          name={name}
          onChange={(e) => {
            setValue(e.target.value)
            onChange && onChange(e)
          }}
          value={value}
        >
          <option style={{ display: 'none' }}></option>
          {options.map((option) => (
            <option key={option} value={option}>
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

  return (
    <>
      <div className={type == 'radio' || type == 'checkbox' ? styles.radioGroup : value ? styles.activeGroup : styles.group}>
        <input
          disabled={disabled}
          className={`${styles.input} ${error && styles.error}`}
          id={id}
          name={name}
          pattern={pattern}
          placeholder={placeholder}
          required={required}
          title={title}
          type={inputType}
          value={value}
          checked={checked}
          autoFocus={autofocus}
          onChange={(e) => {
            setValue(e.target.value)
            onChange && onChange(e)
          }}
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
