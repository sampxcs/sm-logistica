import { useState, useEffect } from 'react'
import styles from './Button.module.css'

import Link from 'next/link'

export default function Button({ className, href, children, onClick, type, light, active, disabled }) {
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

  if (href)
    return (
      <Link href={href}>
        <a
          className={`${styles.button} ${styles[className]} ${light && styles.light} ${active && styles.active}`}
          onClick={(e) => {
            const rect = e.target.getBoundingClientRect()
            setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top })
            onClick && onClick(e)
          }}
        >
          {isRippling ? (
            <span
              className={light ? styles.lightRipple : styles.ripple}
              style={{
                left: coords.x,
                top: coords.y,
              }}
            />
          ) : (
            ''
          )}
          <span className={styles.content}>{children}</span>
        </a>
      </Link>
    )

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles.button} ${styles[className]} ${light && styles.light} ${active && styles.active}`}
      onClick={(e) => {
        const rect = e.target.getBoundingClientRect()
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top })
        onClick && onClick(e)
      }}
    >
      {isRippling ? (
        <span
          className={light ? styles.lightRipple : styles.ripple}
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
