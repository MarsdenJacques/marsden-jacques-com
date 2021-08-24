import styles from '../styles/section-layout.module.css'
import Blurb from './blurb.js'
import { useState, useEffect, useRef } from 'react'
import ImageCircle from './image-circle.js'
export default function Layout({sectionName, imgs, blurbText, imgText, sectionIndex, setSection, link}){
    const [isIntersecting, setIntersecting] = useState(false)
    const ref = useRef()
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), {threshold: .5})//entries => entries.forEach(entry => console.log(entry.target.id + ', ' + entry.intersectionRatio)))//;entries.forEach((entry,index) => {console.log(entry);}))
        observer.observe(ref.current)
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
      }, [])
      useEffect(()=>{
        if(isIntersecting){
            setSection(sectionIndex)
        }
      },[isIntersecting])
    return(
        <div className = {styles.layout}>
            <div ref = {ref}className = {styles.container} id = {sectionName}>
            {
                imgs !== undefined && imgs.map((img, index) => {
                    return( 
                        <div key = {index} className = {styles.imageContainer} style = {{paddingBottom: '' + 0 + 'px', paddingLeft: '' + 0 + 'px'}}>
                            <ImageCircle className = {styles.image} image = {img} text = {imgText[index]} link = {link[index]}/>
                        </div>
                    )
                })
            }
            </div>
            <div className = {styles.blurb}><Blurb text = {blurbText}/></div>
        </div>
    )
}

function IndexToOffset(index, horizontal){
    
}

function Random(min, max, hasNegative){
    let sign = hasNegative ? Math.random() < .5 ? -1 : 1 : 1
    return Math.floor(Math.random() * (max - min + 1) + min) * sign
}