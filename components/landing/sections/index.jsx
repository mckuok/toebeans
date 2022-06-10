import { useRef } from 'react';

import { useSizeChanges } from "../../../services/size-hook";
import styles from "../../../styles/Section.module.css";

export default function Section({backgroundUrl, backgroundHeight, leftInfo, rightInfo}) {
    const contentRef = useRef();
    const contentSize = useSizeChanges(contentRef);

    const height = Math.max(backgroundHeight, contentSize ? contentSize.height : 0);
    
    return (
        <div>
            <div className={`${styles['bg-container']}`} style={{height, minHeight: backgroundHeight}}>
                <div className="absolute w-full h-full overflow-hidden w-auto md:w-full">
                    <img className="max-w-none h-full w-auto md:w-full" src={backgroundUrl}/>
                </div>
                <div className="flex flex-col justify-center h-full">
                    <div className={`flex flex-col md:flex-row justify-center w-3/5 mx-auto`} ref={contentRef}>
                        <div className={`${styles['image-container']} z-10`}>
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