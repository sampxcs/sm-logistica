import { useState, useEffect } from 'react'
import styles from './Button.module.css'

import Spinner from '../Spinner'

import Link from 'next/link'

export default function Button({
  className,
  href,
  children,
  onClick,
  type,
  red,
  light,
  active,
  disabled,
  loading,
  width,
  color,
  background,
}) {
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
          style={{ width: width, color: color, borderColor: color, backgroundColor: background }}
          className={`${styles.button} ${styles[className]} ${light && styles.light} ${red && styles.red} ${active && styles.active}`}
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
      style={{ width: width, color: color, borderColor: color, backgroundColor: background }}
      type={type}
      disabled={disabled || loading}
      className={`${styles.button} ${styles[className]} ${light && styles.light} ${red && styles.red} ${active && styles.active}`}
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
      <span className={styles.content}>{loading ? <Spinner light={!light} /> : children}</span>
    </button>
  )
}
