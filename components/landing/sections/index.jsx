import { useRef } from 'react';

import { useSizeChanges } from "../../../services/size-hook";
import styles from "../../../styles/landing/Section.module.css";

export default function Section({backgroundUrl, backgroundHeight, backgroundWidth, leftInfo, rightInfo}) {
    const contentRef = useRef();
    const componentRef = useRef();
    const contentSize = useSizeChanges(contentRef);
    const componentSize = useSizeChanges(componentRef);

    const height = Math.max(backgroundHeight, contentSize ? contentSize.height : 0);
    const componentWidth = componentSize ? componentSize.width : 0;
    let imageDivWidthClass;
    if (componentWidth > backgroundWidth)  {
        imageDivWidthClass = 'w-full';
    }
    else {
        imageDivWidthClass = 'w-auto';
    }
    
    return (
        <div>
            <div className={`relative overflow-hidden`} style={{height, minHeight: backgroundHeight}} ref={componentRef}>
                <div className="absolute w-full h-full overflow-hidden w-auto md:w-full">
                    <img className={`max-w-none h-full ${imageDivWidthClass}`} src={backgroundUrl}/>
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