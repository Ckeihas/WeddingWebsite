import React from 'react'
import Image, { StaticImageData } from 'next/image'
import WeddingImg from '../../assets/bg-img.jpg'
import styles from './Gallery.module.css'
import GalleryImage from './GalleryImage'
import HeartLineAnim from "./HeartLineAnim"

interface IGalleryImages {
  id: number,
  image: string,
  alt: string,
  width: number,
  height: number
}

const galleryImages: IGalleryImages[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1607047795460-9521dfad2269?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHx3ZWRkaW5nJTIwYmFybnxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'outdoor setup',
    width: 500,
    height: 300
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1427477321886-abc24e8ce923?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHdlZGRpbmclMjBiYXJufGVufDB8fDB8fHww',
    alt: 'swing',
    width: 200,
    height: 200
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'gallery img',
    width: 400,
    height: 600
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'gallery img',
    width: 400,
    height: 300
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'table',
    width: 400,
    height: 300
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'ail',
    width: 400,
    height: 300
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1596457221755-b96bc3a6df18?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'married couple',
    width: 300,
    height: 450
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1517817500400-c961b0488325?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHdlZGRpbmclMjBiYXJufGVufDB8fDB8fHww',
    alt: 'barn',
    width: 400,
    height: 300
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=3355&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'married couple',
    width: 450,
    height: 700
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1588963200960-44cf8e2b6fed?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHx3ZWRkaW5nJTIwYmFybnxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'inside barn',
    width: 400,
    height: 400
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1529634897274-69e6ac04f315?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHx3ZWRkaW5nJTIwYmFybnxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'groom and pride',
    width: 400,
    height: 300
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1526092817387-8f07b2904e48?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHx3ZWRkaW5nJTIwYmFybnxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'lights',
    width: 400,
    height: 350
  },
]

const Gallery = () => {
  
  return (
    <div className={styles.gallery}>
      <HeartLineAnim />
      {galleryImages.map((image: IGalleryImages) => {
        return(
          <GalleryImage photo={image}/>
        )
      })}
    </div>
  )
}

export default Gallery