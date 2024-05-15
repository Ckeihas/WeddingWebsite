"use client"
import React from 'react'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'
import { StaticImageData } from 'next/image'
import BarnPng from '../../assets/barn.png'
import FoodAndDrinkPng from '../../assets/fork.png'
import GroupPng from '../../assets/group.png'
import WeddingPng from '../../assets/wedding-arch.png'

type Icons = {
    title: string,
    description: string,
    image: StaticImageData
  }
  const icons: Icons[] = [
    {
      title: "Juhlatila",
      description: '200m2 kunnostetut tilat tarjoavat juhlavan tunnelman',
      image: BarnPng
    },
    {
      title: "Omat ruoat ja juomat sallittu",
      description: 'Omat tarjoilut ovat sallittu, suosittelemme (joku catering palvelu)',
      image: FoodAndDrinkPng
    },
    {
      title: "Istumapaikat",
      description: 'Istumapaikat löytyvät 200 henkilölle',
      image: GroupPng
    },
    {
      title: "Muokattavuus",
      description: 'Annamme sinulle vapaat kädet, saat muokata juhlatilasta juuri sinun näköisesi!',
      image: WeddingPng
    },
  ]

  const fadeVariants = {
    initial: { 
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({ 
        opacity: 1,
        y: 0,
        transition: { 
            delay: 0.7 * index
        }
    })
}
export default function Template() {
  return (
    <div className={styles.iconsCont}>
        {icons.map((icon, index) => (
        <motion.div 
        key={index} 
        className={styles.iconAndInfo} 
        variants={fadeVariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                    once: true
                }}
                custom={index}
        >
            <img src={icon.image.src} className={styles.icon}/>
            <h2 className={styles.iconTitle}>{icon.title}</h2>
            <p className={styles.desc}>{icon.description}</p>
        </motion.div>
        ))}
    </div>
  )
}
