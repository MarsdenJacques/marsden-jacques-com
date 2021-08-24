import styles from '../styles/directory.module.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'
export default function Directory({currentSection, currentLanguage}){
    const [showPortfolio, setShowPortfolio] = useState(currentSection > 0 && currentSection < 5 ? '' : ' ' + styles.portfolioSectionOff)
    useEffect(()=>{
        setShowPortfolio(currentSection > 0 && currentSection < 5 ? '' : ' ' + styles.portfolioSectionOff)
    },[currentSection])

    function ToggleOffPortfolio(){
        if(currentSection <= 0 || currentSection >=5) setShowPortfolio(' ' + styles.portfolioSectionOff)
    }
    function ToggleOnPortfolio(){
        setShowPortfolio('')
    }
    //need japanese language style
    return(
        <div className = {styles.container} onMouseLeave = {()=> ToggleOffPortfolio()}>
            <div className = {styles.subContainer}>
                <div className = {styles.textContainer}><Link href = '/#Websites'><div className = {styles.selector}><p className = {styles.link + showPortfolio}>{currentLanguage.banner[2]}</p></div></Link></div>
                <div className = {styles.textContainer}><Link href = '/#Games'><div className = {styles.selector}><p className = {styles.link + showPortfolio}>{currentLanguage.banner[3]}</p></div></Link></div>
                <div className = {styles.textContainer}><Link href = '/#Research'><div className = {styles.selector}><p className = {styles.link + showPortfolio}>{currentLanguage.banner[4]}</p></div></Link></div>
            </div>
            <div className = {styles.subContainer}>
                <div className = {styles.textContainer}><Link href = '/#About'><div className = {styles.selector}><p className = {styles.link} onMouseEnter = {()=>ToggleOffPortfolio()}>{currentLanguage.banner[0]}</p></div></Link></div>
                <div className = {styles.textContainer}><Link href = '/#Portfolio'><div className = {styles.selector}><p className = {styles.link} onMouseEnter = {()=>ToggleOnPortfolio()}>{currentLanguage.banner[1]}</p></div></Link></div>
                <div className = {styles.textContainer}><Link href = '/#Contact'><div className = {styles.selector}><p className = {styles.link} onMouseEnter = {()=>ToggleOffPortfolio()}>{currentLanguage.banner[5]}</p></div></Link></div>
            </div>
        </div>
    )
}
/*                */