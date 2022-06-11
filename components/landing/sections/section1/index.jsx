import styles from "../../../../styles/landing/SectionOne.module.css";

import image from '../../../../public/landing/sections/food.png'
import Section from '../'

import bg from '../../../../public/landing/sections/section-one-background.svg'

export default function SectionOne() {

    return (
        <Section 
            backgroundImg={bg}
            backgroundHeight={358}
            backgroundWidth={1440}
            leftInfo={<img src={image} alt='Food' />}
            rightInfo={
                <>
                    <p className={styles.title}>Café</p>
                    <p className={styles.text}>Start your workday with a cup of fresh brewed coffee, or get some soft serves on a hot day</p>
                    <br />
                    <p className={styles.text}>See our <span className='link-text'> menu </span> for full selection</p>
                </>
            }
        />
    )
}