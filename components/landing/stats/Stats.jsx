
import Image from 'next/image';

import styles from '../../../styles/Stats.module.css'
import patch from './patch.svg';

export default function Stats({number, unit, rotationDegree}) {
    return (
        <div className={styles.container}>
            <Image src={patch} className='absoute' style={{transform: `rotate(${rotationDegree}deg)`}}/>
            <div className={styles.stats}>
                <p className={styles.number}>{number}</p>
                <p className={styles.unit}>{unit}</p>
            </div>
        </div>
    )
} 