import logo from '../../../public/logo.png';
import arrow from '../../../public/landing/coming-soon/arrow.svg';

import { useCallback, useRef } from 'react';
import { useSizeChanges } from '../../../services/size-hook';

export default function ComingSoonBanner() {
    const bannerRef = useRef();
    const bannerSize = useSizeChanges(bannerRef);

    const scrollToMainContent = useCallback(() => {
        if (bannerSize) {
            window.scrollTo({
                top: bannerSize.height,
                left: 0,
                behavior: 'smooth'
            });
        }
    }, [bannerSize]);
    
    return (
        <div className="w-full h-screen text-left lg:text-center px-10 lg:px-0" ref={bannerRef} style={{
            backgroundImage: 'url("/landing/coming-soon/bg.png")'
        }}>
            <div className='flex flex-col h-full justify-beteween'>
                <div className="flex flex-col justify-center h-full">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-center w-full flex-wrap">
                        <img src={logo} alt='Toe Beans &amp; Dreams Logo' />
                        <span className='hidden lg:block px-5'/>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl">Toe Beans &amp; Dreams, Coming Soon.</h1>
                    </div>
                    <div className="py-6"/>
                    <p className="text-2xl md:text-3xl lg:text-4xl"> Follow our <a className="link-text" href="https://www.instagram.com/toebeans_and_dreams/">Instagram</a> for the latest updates.</p>
                </div>
                <div className='flex flex-col justify-center items-center animate-bounce my-10 pointer cursor-pointer' onClick={scrollToMainContent}>
                    <p className='text-xl'> sneak peek?</p>
                    <div className="py-2"/>
                    <img src={arrow} alt="downward arrow" height={50} width={50}/>
                </div>
            </div>
        </div>
    )
}