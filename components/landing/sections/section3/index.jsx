import sectionStyles from "../../../../styles/landing/SectionOne.module.css";
import styles from "../../../../styles/landing/SectionThree.module.css"

import image from '../../../../public/landing/sections/kat charities.png'
import Section from '..'

import bg from '../../../../public/landing/sections/section-three-background.svg'
import ExternalLink from "../../../utils/ExternalLink";

export default function SectionThree() {
    return (
        <Section 
            backgroundImg={bg}
            backgroundHeight={353}
            backgroundWidth={1440}
            leftInfo={
                <img src={image} alt='KAT Charities' height={300} width={424}/>
            }
            rightInfo={
                <div>
                    <p className={sectionStyles.title}>Supported by KAT Charities</p>
                    <p className={sectionStyles.text}><ExternalLink href="https://katcharities.org/">KAT Charities</ExternalLink> was born out of a dream to unite children with disabilities and animals to caring, loving people </p>
                    <br />
                    <p className={sectionStyles.text}>Toe Beans &amp; Dream creates a community centered around love, care and joy where the possibilities are endless</p>
                    <br />
                    <div className={`${styles.donation}`}>
                        <ExternalLink href="https://www.paypal.com/paypalme/katcharities"> Donations </ExternalLink>
                    </div>
                </div>
            }
        />
    )
}