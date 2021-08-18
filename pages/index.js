import BannerText from "../components/banner-text.js"
import LanguagePicker from '../components/language-picker.js'
import Directory from '../components/directory.js'
import Section from '../components/section-layout.js'
import { useState } from 'react'
import { English, Japanese } from '../components/text.js'
import styles from '../styles/home.module.css'

export default function Home() {
  const [currentSection, setCurrentSection] = useState(-1)
  console.log(currentSection)
  return (
    <div className = {styles.mainContainer}>
        <BannerText text = {English.banner[currentSection]}/>
        <Directory className = {styles.directory} currentSection = {currentSection}/>
        <LanguagePicker className = {styles.languagePicker}/>
        <main className={styles.main} >
          {
            English.banner.map((banner, index)=>{
              return(
                <Section key = {banner} className = {styles.section} imgs = {English.images[index]} blurbText = {English.blurb[index]} imgText = {English.imageText[index]} sectionIndex = {index} setSection = {setCurrentSection}/>
              )
            })
          }
        </main>
    </div>
  )
}
