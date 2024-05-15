import React from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from './Gallery.module.css'

interface Iphotos {
    id: number
    alt: string
    image: string,
    width: number,
    height: number
}

type OnePhoto = {
    photo: Iphotos
}

const GalleryImage = ({photo}: OnePhoto) => {
    const widthHeightRatio = photo.height / photo.width;
    const galleryHeight = Math.ceil(250 * widthHeightRatio)
    const photoSpans = Math.ceil(galleryHeight / 10) + 1
  return (
    <div style={{gridRow: `span ${photoSpans}`}}>
        <Image 
        key={photo.id}
        src={photo.image}
        alt={photo.alt}
        width={250}
        height={galleryHeight}
        sizes='250px'
        className={styles.galleryImg}
        />
    </div>
  )
}

export default GalleryImage