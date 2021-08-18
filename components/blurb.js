import styles from '../styles/blurb.module.css'
export default function Blurb({text}){
    return(
        <div className = {styles.container}>
            <p className = {styles.text}>{text}</p>
        </div>
    )
}