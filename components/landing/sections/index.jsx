import styles from "../../../styles/Section.module.css";

export default function Section({backgroundUrl, backgroundHeight, leftInfo, rightInfo}) {
    return (
        <div>
            <div className={`${styles['bg-container']}`} style={{backgroundImage: `url(${backgroundUrl})`, minHeight: backgroundHeight}}>
                <div className={`flex flex-row justify-center w-3/5 mx-auto ${styles.content}`}>
                    <div className={styles['image-container']}>
                        {leftInfo}
                    </div>
                    <div>
                        {rightInfo}
                    </div>
                </div>
            </div>
        </div>
    )
}