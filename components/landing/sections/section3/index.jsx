import Image from 'next/image';
import sectionStyles from "../../../../styles/landing/SectionOne.module.css";
import styles from "../../../../styles/landing/SectionThree.module.css"

import image from '../../../../public/landing/sections/kat charities.png'
import Section from '..'


export default function SectionThree() {
    return (
        <Section 
            backgroundUrl="/landing/sections/section-three-background.svg"
            backgroundHeight={353}
            backgroundWidth={1440}
            leftInfo={
                <Image src={image} height={300} width={424}/>
            }
            rightInfo={
                <div>
                    <p className={sectionStyles.title}>Supported by KAT Charities</p>
                    <p className={sectionStyles.text}><span className='link-text'>KAT Charities</span> was born out of a dream to unite children with disabilities and animals to caring, loving people </p>
                    <br />
                    <p className={sectionStyles.text}>Toe Beans &amp; Dream creates a community centered around love, care and joy where the possibilities are endless</p>
                    <br />
                    <div className={`${styles.donation}`}>
                        <p className={`link-text`}> Donations </p>
                    </div>
                </div>
            }
        />
    )
}