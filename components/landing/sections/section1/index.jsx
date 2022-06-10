import Image from 'next/image';
import styles from "../../../../styles/landing/SectionOne.module.css";

import image from '../../../../public/landing/food.png'
import Section from '../'

export default function SectionOne() {

    return (
        <Section 
            backgroundUrl="/landing/section-one-background.svg"
            backgroundHeight={358}
            backgroundWidth={1440}
            leftInfo={<Image src={image} />}
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