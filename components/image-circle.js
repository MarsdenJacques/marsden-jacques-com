import Image from 'next/image'
import styles from '../styles/image-circle.module.css'
import CircleTextSVG from './circle-text-svg'
export default function ImageCircle({text, image, link}){
    return(
        <div className = {styles.container}>
            {
                link !== '' ? 
                <a className = {styles.link} href = {link}><div className = {styles.circle + ' ' + styles.linkCircle}>
                    <Image src = {image} width = {400} height = {400} className = {styles.img}/>
                </div></a> : 
                <div className = {styles.circle}>
                    <Image src = {image} width = {400} height = {400} className = {styles.img}/>
                </div>
            }
            
            <CircleTextSVG text = {text}/>
            
        </div>
    )
}
//<CircleText text = {text} className = {styles.text} maxChars = {maxChars}/>