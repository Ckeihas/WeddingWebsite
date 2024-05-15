import React from 'react'
import styles from './Hero.module.css'
import Template from './Template'



const Hero = () => {
  return (
    <div className={styles.hero}>
      <video autoPlay loop muted className={styles.bgVideo}>
      <source src="http://localhost:3000/bgVideo.mp4" type="video/mp4" />
      </video>
      <div className={styles.waveBg}>
        <h1 className={styles.tarjoamme}>Tarjoamme</h1>
      </div>
        <Template />
    </div>
  )
}

export default Hero