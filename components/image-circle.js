import CircleText from "./circle-text.js";
import Image from 'next/image'
import styles from '../styles/image-circle.module.css'
export default function ImageCircle({text, image}){
    return(
        <div className = {styles.circle}>
            <Image src = {image} className = {styles.img}/>
            <CircleText text = {text} className = {styles.text}/>
        </div>
    )
}