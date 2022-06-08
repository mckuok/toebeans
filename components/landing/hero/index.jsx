import Image from 'next/image';

import CatBackgroundPatch from "./cat-background-patch";
import styles from '../../../styles/HeroSection.module.css';

import cat1 from './cat1.png';
import cat2 from './cat2.png';
import cat3 from './cat3.png';

export default function HeroSection() {
    return (
        <div className="flex flex-row items-center justify-center mx-8">
            <div className={`${styles['text-section']}`}>
                <p>Surrounded with Love, </p>
                <p>Visit our Adoption Cafe for a new friend</p>
            </div>
            <div className={`${styles['image-section']}`}>
                <div className={`${styles.patch} ${styles.patch1}`}>
                    <CatBackgroundPatch rotationDegree={-9.14} color="#CFEFD2"/>
                </div>
                <div className={`${styles.patch} ${styles.patch2}`}>
                    <CatBackgroundPatch rotationDegree={1.32} color="#F19ABD"/>
                </div>
                <div className={`${styles.patch} ${styles.patch3}`}>
                    <CatBackgroundPatch rotationDegree={1.08} color="#ECEB9A"/>
                </div>
                <div className={`${styles.cat} ${styles.cat1}`}>
                    <Image src={cat1} width={245} height={236} layout='fixed'/>
                </div>
                <div className={`${styles.cat} ${styles.cat2}`}>
                    <Image src={cat2} width={261} height={225} layout='fixed'/>
                </div>
                <div className={`${styles.cat} ${styles.cat3}`}>
                    <Image src={cat3} width={409} height={278} layout='fixed'/>
                </div>
            </div>
        </div>

    )
}