import styles from '../styles/banner-text.module.css'
export default function BannerText({currentText}){

    return(
        <div className = {styles.banner}>
            <p className = {styles.text + ' ' + styles.text1}>{currentText}</p>
            <p className = {styles.text + ' ' + styles.text2}>{currentText}</p>
        </div>
    )
}
/*            {
                currentText.map((string, index)=>{
                    let position = index === currentSection ? '' : index > currentSection ? ' ' + styles.below : ' ' + styles.above
                    if(index === 0 && currentSection < 0) position = ''
                    return(
                    <div key = {index}>
                        <p className = {styles.text + ' ' + styles.text1 + position}>{string}</p>
                        <p className = {styles.text + ' ' + styles.text2 + position}>{string}</p>
                    </div>
                    )
                })
            }*/