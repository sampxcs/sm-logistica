import styles from './Input.module.css'
import { useState } from 'react'

export default function InputFile({ disabled, error, required, id, label, title, onChange, name }) {
  const [dragOver, setDragOver] = useState()

  const onDragEnter = () => setDragOver(true)
  const onDragLeave = () => setDragOver(false)
  const onDrop = (e) => {
    setDragOver(false)
    const file = e.target.files[0]
    console.log(file)
  }

  return (
    <div className={`${styles.dropZone} ${dragOver && styles.dragOver}`}>
      <input
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        disabled={disabled}
        required={required}
        className={` ${error && styles.error}`}
        id={id}
        name={name}
        title={title}
        type={'file'}
        value={''}
        onChange={(e) => {
          console.log(e.target.value)
          onChange && onChange()
        }}
      />
      <label htmlFor={id} className={styles.dropLabel}>
        {label}
        {error && <small className={styles.errorMessage}>{error}</small>}
      </label>
    </div>
  )
}
