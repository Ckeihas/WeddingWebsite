"use client"
import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import styles from './BookingCalendar.module.css'

const CalendarView = () => {
    return(
        <div>
            <Calendar className={styles.calendarCont}/>
        </div>
    )
}


export default CalendarView