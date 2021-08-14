import Image from 'next/image'
import BannerText from "../components/banner-text.js"
import LanguagePicker from '../components/language-picker.js'
import About from '../components/about.js'
import Portfolio from '../components/portfolio.js'
import Contact from '../components/contact.js'
import { English, Japanese } from '../components/text.js'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
      <main className={styles.main}>
        <p className = {styles.text}>test</p>
        <p className = {styles.text2}>Marsden Jacques<br/>Websites<br/>Games<br/>Research</p>
        <BannerText text = {English.aboutBanner}/>
        <LanguagePicker/>
        <About/>
      </main>
  )
}
