import React from 'react'
import styles from './Contact.module.css'
import { motion } from "framer-motion"

interface IContactInfo {
    name: string;
    email: string;
    phone: string;
  }
  
  const contactInfo: IContactInfo[] = [
    {
      name: 'Christian',
      email: 'nimi.nimi@gmail.com',
      phone: '+358 000000000'
    },
    {
      name: 'Riku',
      email: 'nimi.nimi@gmail.com',
      phone: '+358 000000000'
    },
    {
      name: 'Joona',
      email: 'nimi.nimi@gmail.com',
      phone: '+358 000000000'
    },
  ];
const ContactInfoAnim = () => {
  return (
    <div className={styles.info}>
        {contactInfo.map((info: IContactInfo) => (
            <div className={styles.infoItem}>
                <div className={styles.infoProfileImg}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 512 512">
                    <path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" stroke-width="32"/>
                    <path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-miterlimit="10" 
                    stroke-width="32"/>
                    </svg>
                </div>
                <div className={styles.contactInfo}>
                    <h3>{info.name}</h3>
                    <h3 className={styles.textStyle}>{info.email}</h3>
                    <h3 className={styles.textStyle}>{info.phone}</h3>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ContactInfoAnim