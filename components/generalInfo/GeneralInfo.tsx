import React from 'react'
import TitleSvg from './TitleSvg'
import Image from 'next/image'
import styles from './GeneralInfo.module.css'
import LocationPng from '../../assets/address.png'
import HandsPng from '../../assets/agreement.png'

const GeneralInfo = () => {
  return (
    <div className={styles.generalInfo}>
      <div className={styles.locationCont}>
        <Image src={LocationPng} alt='location png' className={styles.locationPng}/>
        <p className={styles.locationInfo}>Juhlatila sijoittuu 15min ajomatkan päässä Turun keskustasta, Ruskolla. Rauhallinen maaseutu tarjoaa täydelliset puitteet yksityiselle juhlapäivälle! Ruskon oma kirkko on ainoastaan muutaman minuutin ajomatkan päässä</p>
      </div>
      <div className={styles.tutustumisCont}>
        <p className={styles.tutustumisInfo}>Ota yhteyttä ja sovitaan ei-sitova tutustumiskäynti! Saat rauhassa tutustua juhlatiloihin sekä esittää mieleen tulevia kysymyksiä koskien esim. Juhlatilan muokkauksesta ja voidaan yhdessä pohtia miten saamme haluamasi toiveet toteutettua.</p>
        <Image src={HandsPng} alt='handshake png' className={styles.handsPng}/>
      </div>
    </div>
  )
}

export default GeneralInfo