import styles from '../styles/language-picker.module.css'
export default function LanguagePicker({SelectLanguage}){
    return(
        <div className = {styles.container}>
            <p className = {styles.selector}>English</p>
            <p className = {styles.selector}>Japanese</p>
        </div>
    )
}