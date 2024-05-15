import dynamic from 'next/dynamic'
import React from 'react'
import styles from './Contact.module.css'
const NoSSR = dynamic(() => import('./ContactInfoAnim'), { ssr: false })

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.header}>Ota Yhteyttä</h1>
      <div className={styles.content}>
        <div>
          <NoSSR />
        </div>
        <div>
          <form className={styles.theForm}>
            <input placeholder="Name" className={styles.theInputs}/>
            <input placeholder="Email" className={styles.theInputs}/>
            <textarea 
            className={styles.textArea}
            rows={18} 
            placeholder="Message" 
            name="message"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact