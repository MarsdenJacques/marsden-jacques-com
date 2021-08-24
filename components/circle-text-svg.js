import styles from '../styles/circle-text-svg.module.css'
export default function CircleTextSVG({text}){
    return(
        <div className = {styles.container}>
            <div className = {styles.svg}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xmlSpace="preserve">
                    <defs>
                        <path id="circlePath" d="M 130, 151 m -60, 0 a 60,60 0 0,1 160,0 a 60,60 0 0,1 -160,0 "/>
                    </defs>
                    <g>
                    <use xlinkHref="#circlePath" fill="none"/>
                    <text fill="#000">
                        <textPath xlinkHref="#circlePath">{text}</textPath>
                    </text>
                    </g>
                </svg>
            </div>         
        </div>
      )
}