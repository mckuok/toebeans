import styles from '../../../styles/CatBackgroundPatch.module.css';

export default function CatBackgroundPatch({rotationDegree, color}) {
    return (
        <div className={styles.patch} style={{transform: `rotate(${rotationDegree}deg)`}}>
            <svg width="349" height="238" viewBox="0 0 349 238" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M309.044 34.652C331.396 59.4448 347.697 88.6832 348.528 130.246C349.567 182.199 346.45 203.139 303.849 223.92C261.247 244.701 96.0362 243.503 39.9269 205.058C-4.96057 174.302 -2.32828 104.269 4.5988 73.0973C10.1405 57.4476 9.6503 48.9985 52.3956 16.2747C95.141 -16.4491 286.692 9.8593 309.044 34.652Z" fill={color}/>
            </svg>
        </div>
    )
}