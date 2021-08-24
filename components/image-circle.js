import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/image-circle.module.css'
import CircleTextSVG from './circle-text-svg'
export default function ImageCircle({text, image, link}){
    return(
        <div className = {styles.container}>
            {
                link !== '' ? 
                <Link className = {styles.link} href = {link}><div className = {styles.circle + ' ' + styles.linkCircle}>
                    <Image src = {image} className = {styles.img}/>
                </div></Link> : 
                <div className = {styles.circle}>
                    <Image src = {image} className = {styles.img}/>
                </div>
            }
            
            <CircleTextSVG text = {text}/>
            
        </div>
    )
}
//<CircleText text = {text} className = {styles.text} maxChars = {maxChars}/>