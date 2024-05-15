import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import GeneralInfo from "@/components/generalInfo/GeneralInfo";
import Gallery from "@/components/gallery/Gallery";
import BookingCalendar from "@/components/booking/BookingCalendar";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <Hero />
      </section>
      <section>
        <GeneralInfo />
      </section>
      <section>
        <Gallery />
      </section>
      <section>
        <BookingCalendar />
      </section>
      <section>
        <Contact />
      </section>
    </main>
  );
}
