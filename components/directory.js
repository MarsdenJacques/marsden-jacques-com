import styles from '../styles/directory.module.css'
import { useState, useEffect } from 'react'
export default function Directory({currentSection, currentLanguage, Scroll}){
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
    function style(index){
        return index === currentSection ? styles.selector + ' ' + styles.active : styles.selector
    }
    //need japanese language style
    return(
        <div className = {styles.container} onMouseLeave = {()=> ToggleOffPortfolio()}>
            <div className = {styles.subContainer}>
                <div className = {styles.textContainer}><div className = {style(2)} onClick = {()=>Scroll(2)}><p className = {styles.link + showPortfolio}>{currentLanguage.banner[2]}</p></div></div>
                <div className = {styles.textContainer}><div className = {style(3)} onClick = {()=>Scroll(3)}><p className = {styles.link + showPortfolio}>{currentLanguage.banner[3]}</p></div></div>
                <div className = {styles.textContainer}><div className = {style(4)} onClick = {()=>Scroll(4)}><p className = {styles.link + showPortfolio}>{currentLanguage.banner[4]}</p></div></div>
            </div>
            <div className = {styles.subContainer}>
                <div className = {styles.textContainer}><div className = {style(0)} onClick = {()=>Scroll(0)}><p className = {styles.link} onMouseEnter = {()=>ToggleOffPortfolio()}>{currentLanguage.banner[0]}</p></div></div>
                <div className = {styles.textContainer}><div className = {style(1)} onClick = {()=>Scroll(1)}><p className = {styles.link} onMouseEnter = {()=>ToggleOnPortfolio()}>{currentLanguage.banner[1]}</p></div></div>
                <div className = {styles.textContainer}><div className = {style(5)} onClick = {()=>Scroll(5)}><p className = {styles.link} onMouseEnter = {()=>ToggleOffPortfolio()}>{currentLanguage.banner[5]}</p></div></div>
            </div>
        </div>
    )
}