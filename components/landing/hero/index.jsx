import CatBackgroundPatch from "./cat-background-patch";
import styles from '../../../styles/landing/HeroSection.module.css';

import cat1 from '../../../public/landing/hero/cat1.png';
import cat2 from '../../../public/landing/hero/cat2.png';
import cat3 from '../../../public/landing/hero/cat3.png';

function CatPictures() {
     return (
        <div className={`${styles['image-section']}`}>
            <div className={`absolute ${styles.patch1}`}>
                <CatBackgroundPatch rotationDegree={-9.14} color="#CFEFD2"/>
            </div>
            <div className={`absolute ${styles.patch2}`}>
                <CatBackgroundPatch rotationDegree={1.32} color="#F19ABD"/>
            </div>
            <div className={`absolute ${styles.patch3}`}>
                <CatBackgroundPatch rotationDegree={1.08} color="#ECEB9A"/>
            </div>
            <div className={`absolute ${styles.cat1}`}>
                <img src={cat1} alt='Cat 1' width={211} height={234} layout='fixed'/>
            </div>
            <div className={`absolute ${styles.cat2}`}>
                <img src={cat2} alt='Cat 2' width={261} height={225} layout='fixed'/>
            </div>
            <div className={`absolute ${styles.cat3}`}>
                <img src={cat3} alt='Cat 3' width={409} height={278} layout='fixed'/>
            </div>
            <div className='md:hidden relative w-full h-full bg-white opacity-60' />
        </div>
     );
}

export default function HeroSection() {
    return (
        <div className="block relative md:flex flex-col-reverse md:flex-row items-center justify-center mx-8 h-96 md:h-auto">
            <div className={`${styles['text-section']} absolute md:relative z-10`}>
                <p>Surrounded with <span className={`${styles.love}`}>Love</span></p>
                <br />
                <p>Visit our Adoption Cafe for a new <span className={`${styles.friend}`}>friend</span></p>
            </div>
            <div className='absolute md:relative overflow-hidden w-full md:w-auto h-96 md:h-auto'>
                <div className='hidden md:block'>
                    <CatPictures />
                </div>
                <div className={`md:hidden relative h-full`} style={{opacity: 0.30}}>
                    <div style={{position: 'absolute', bottom: 0, right: 0}}>
                        <img src={cat1} alt='Cat 1' width={211 * 1.2} height={234 * 1.2} layout='fixed'/>
                    </div>
                </div>
            </div>
        </div>

    )
}