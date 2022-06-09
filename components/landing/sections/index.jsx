import { MD_WIDTH, useWindowDimensions } from "../../../services/windows-size";
import styles from "../../../styles/Section.module.css";

export default function Section({backgroundUrl, backgroundHeight, leftInfo, rightInfo}) {
    const windowsDimentions = useWindowDimensions();
    let height = backgroundHeight;
    if (windowsDimentions !== null && windowsDimentions.width < MD_WIDTH) {
        height = 'auto';
    }
    
    return (
        <div>
            <div className={`${styles['bg-container']}`} style={{height, minHeight: backgroundHeight}}>
                <div className="absolute w-full h-full">
                    <img className="max-w-none h-full md:w-full" src={backgroundUrl}/>
                </div>
                <div className="flex flex-col justify-center h-full">
                    <div className={`flex flex-col md:flex-row justify-center w-3/5 mx-auto`}>
                        <div className={`styles['image-container'] z-10`}>
                            {leftInfo}
                        </div>
                        <div className="z-10">
                            {rightInfo}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}