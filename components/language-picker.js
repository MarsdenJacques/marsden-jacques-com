import styles from '../styles/language-picker.module.css'
import Language from './text.js'
export default function LanguagePicker({setCurrentLanguage}){
    return(
        <div className = {styles.container}>
            {
                Language.map((language, index)=>{
                    return(<p key = {index} className = {styles.selector} onClick = {() => {setCurrentLanguage(index)}}>{language.language}</p>)
                })
            }
        </div>
    )
}