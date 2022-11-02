import { useState, useEffect } from 'react'
import styles from '../../styles/Button.module.css'

export default function Button({ children, onClick, type, light, dark}) {
  const [coords, setCoords] = useState({ x: -1, y: -1 })
  const [isRippling, setIsRippling] = useState(false)

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true)
      setTimeout(() => setIsRippling(false), 300)
    } else setIsRippling(false)
  }, [coords])

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 })
  }, [isRippling])

  return (
    <button
      type={type}
      className={styles.button}
      onClick={(e) => {
        const rect = e.target.getBoundingClientRect()
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top })
        onClick && onClick(e)
      }}
    >
      {isRippling ? (
        <span
          className={dark ? styles.darkRipple : light ? styles.lightRipple : styles.ripple}
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : (
        ''
      )}
      <span className={styles.content}>{children}</span>
    </button>
  )
}
