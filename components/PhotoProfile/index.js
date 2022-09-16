import styles from '../../styles/PhotoProfile.module.css'
import Image from 'next/image'

export default function PhotoProfile() {
  return <div className={styles.photo}><Image src='/favicon.ico' alt='profile' width="30" height="30"/></div>
}