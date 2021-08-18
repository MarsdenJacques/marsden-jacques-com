import styles from '../styles/circle-text.module.css'
export default function CircleText({text}){
    return(
        <div>
            {text.split("").map((char, index) => {
                let val = 30 + index
                let delay = '-' + val + 's';
                return (<div className = {styles.container} key = {index} style = {{animationDelay: delay}}>
                    {char}
                </div>)
            })}
        </div>
    )
}