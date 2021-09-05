import BannerText from "../components/banner-text.js"
import LanguagePicker from '../components/language-picker.js'
import Directory from '../components/directory.js'
import Section from '../components/section-layout.js'
import { useState,useRef } from 'react'
import Language from '../components/text.js'
import styles from '../styles/index.module.css'

export default function Home() {
  const [currentSection, setCurrentSection] = useState(-1)
  const [currentLanguage, setCurrentLanguage] = useState(0)
  const refs = useRef([])
  function Scroll(index){
    const element = refs.current[index]
    if(element!== undefined)
    {
      element.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
  return (
    <div className = {styles.mainContainer}>
        <BannerText currentText = {Language[currentLanguage].banner[currentSection]}/>
        <Directory className = {styles.directory} currentSection = {currentSection} currentLanguage = {Language[currentLanguage]} Scroll = {Scroll}/>
        <LanguagePicker className = {styles.languagePicker} setCurrentLanguage = {setCurrentLanguage}/>
        <main className={styles.main} >
          {
            Language[currentLanguage].banner.map((banner, index)=>{
              return(
                <div key = {index} ref = {(ref)=>{refs.current[index] = ref}}>
                <Section className = {styles.section} imgs = {Language[currentLanguage].images[index]} 
                blurbText = {Language[currentLanguage].blurb[index]} 
                imgText = {Language[currentLanguage].imageText[index]} 
                sectionIndex = {index} setSection = {setCurrentSection}
                sectionName = {Language[0].banner[index]}
                link = {Language[currentLanguage].link[index]}/>
                </div>
              )
            })
          }
        </main>
    </div>
  )
}
