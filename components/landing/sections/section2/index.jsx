import Image from 'next/image';
import styles from "../../../../styles/landing/SectionOne.module.css";

import image from '../../../../public/landing/sections/cat.png'
import Section from '../'

export default function SectionTwo() {
    return (
        <Section 
            backgroundUrl="/landing/sections/section-two-background.svg"
            backgroundHeight={384}
            backgroundWidth={1440}
            rightInfo={<Image src={image} alt='Cat' />}
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