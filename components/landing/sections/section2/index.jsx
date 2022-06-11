import styles from "../../../../styles/landing/SectionOne.module.css";

import image from '../../../../public/landing/sections/cat.png'
import Section from '../'

import bg from '../../../../public/landing/sections/section-two-background.svg'

export default function SectionTwo() {
    return (
        <Section 
            backgroundImg={bg}
            backgroundHeight={384}
            backgroundWidth={1440}
            rightInfo={<img src={image} alt='Cat' />}
            leftInfo={
                <>
                    <p className={styles.title}>Playtime</p>
                    <p className={styles.text}>Enjoy an hour with the animals for $15 / hour</p>
                    <br />
                    <p className={styles.text}>Check out special <span className='link-text'>events</span>, or <span className='link-text'>CONTACT US</span> for a private event hosting</p>
                    <br />
                    <p className={styles.text}>All animals are adoptable. See <span className='link-text'>ADOPTION</span> for more details </p>
                </>
            }
        />
    )
}