import dynamic from 'next/dynamic'
import React from 'react'
import styles from './BookingCalendar.module.css'
const NoSSR = dynamic(() => import('./CalendarView'), { ssr: false })

const BookingCalendar = () => {
  return (
    <div className={styles.bookingCalendar}>
      <div className={styles.itemsCont}>
        <div className={styles.infoCont}>
          <h1 className={styles.hinnoittelu}>Hinnoittelu</h1>
          <p className={styles.infoText}>Vuokratilat ovat käytössä <span className={styles.infoSpan}>Huhtikuu-Syyskuu</span> välisenä aikana.</p>
          <p className={styles.infoText}>Vuokrahinta on <span className={styles.infoSpan}>1200€/vrk</span> päivinä <span className={styles.infoSpan}>Pe, La ja Su</span>. Muina päivinä juhlatilan vuokra on <span className={styles.infoSpan}>600€/vrk</span>.</p>
          <p className={styles.infoText}>Perimme <span className={styles.infoSpan}>50%</span> kokonaishinnasta varausmaksuna. Mahdollinen varauksen peruutus on tehtävä viimeistään <span className={styles.infoSpan}>6kk</span> ennen varattua päivää.</p>
        </div>
        <div>
          <NoSSR />
        </div>
      </div>
    </div>
  )
}

export default BookingCalendar