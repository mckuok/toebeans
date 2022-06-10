
import Image from 'next/image';

import styles from '../../../styles/landing/Stats.module.css'
import patch from './patch.svg';

export default function Stats({number, unit, rotationDegree}) {
    return (
        <div className='relative flex justify-center'>
            <div className='h-40 w-40 md:h-auto md:w-auto'>
                <Image src={patch} alt='Background' style={{transform: `rotate(${rotationDegree}deg)`}}/>
            </div>
            <div className={styles.stats}>
                <p className={`text-5xl md:text-7xl ${styles.number}`}>{number}</p>
                <p className={`text-xl md:text-3xl ${styles.unit}`}>{unit}</p>
            </div>
        </div>
    )
} 