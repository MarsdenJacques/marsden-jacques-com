import styles from '../styles/directory.module.css'
export default function Directory(){
    return(
        <div className = {styles.container}>
            <div className = {styles.textContainer}><p className = {styles.selector}>About</p></div>
            <div className = {styles.textContainer}>
                <p className = {styles.selector}>Portfolio</p>
                <p className = {styles.selector}>Websites</p>
                <p className = {styles.selector}>Games</p>
                <p className = {styles.selector}>Research</p></div>
            <div className = {styles.textContainer}><p>Contact</p></div>
        </div>
    )
}