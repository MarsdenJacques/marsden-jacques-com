import styles from '../styles/banner-text.module.css'
export default function BannerText({text}){
    return(
        <div className = {styles.banner}>
            <p className = {styles.text + ' ' + styles.text1}>{text}</p><p className = {styles.text + ' ' + styles.text2}>{text}</p>
        </div>
    )
}