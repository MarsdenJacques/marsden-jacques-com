import styles from '../styles/circle-text.module.css'
import CircleTextSVG from './circle-text-svg'
export default function CircleText({text, maxChars}){
    const chars = text.split("")
    return(
        <div className = {styles.container}>
            <CircleTextSVG text = {text}/>
        </div>
    )
}

/*            {maxChars.map((char, index) => {
                let val = 30 + index * chars.length/maxChars.length
                let delay = '-' + val + 's';
                return (<div className = {styles.container} key = {index} style = {{animationDelay: delay}}>
                    {index < chars.length ? chars[index] : ''}
                </div>)
            })}*/