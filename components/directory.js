import styles from '../styles/directory.module.css'
import { useState, useEffect } from 'react'
export default function Directory({currentSection}){

    const [showPortfolio, setShowPortfolio] = useState(currentSection === 1 ? styles.portfolioSection : styles.portfolioSectionOff)
    useEffect(()=>{
        setShowPortfolio(currentSection === 1 ? styles.portfolioSection : styles.portfolioSectionOff)
    },[currentSection])
    return(
        <div className = {styles.container}>
            <div className = {styles.subContainer + ' ' + showPortfolio}>
                <div className = {styles.textContainer}><p className = {styles.selector}>Websites</p></div>
                <div className = {styles.textContainer}><p className = {styles.selector}>Games</p></div>
                <div className = {styles.textContainer}><p className = {styles.selector}>Research</p></div>
            </div>
            <div className = {styles.subContainer}>
                <div className = {styles.textContainer}><p className = {styles.selector}>About</p></div>
                <div className = {styles.textContainer}><p className = {styles.selector}>Portfolio</p></div>
                <div className = {styles.textContainer}><p className = {styles.selector}>Contact</p></div>
            </div>
        </div>
    )
}
/*                */