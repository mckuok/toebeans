import Image from 'next/image';
import React, { useState, useCallback, useRef } from 'react';

import { useSizeChanges } from '../services/size-hook';

import menuIcon from '../public/nav/hamburger.svg';

export default function Navbar() {
    const [expandMobileMenu, setExpandMobileMenu] = useState(false);
    const mobileMenuClicked = useCallback(() => {
        console.log('clicked');
        setExpandMobileMenu((isExpanded) => {
            return !isExpanded
        });
    }, []);
    const navBarRef = useRef();
    const dimensions = useSizeChanges(navBarRef);
    let navBarHeight = null;
    if (dimensions) {
        navBarHeight = dimensions.height;
    }

    const menuItems = ['About Us', 'Menu', 'Adoption', 'Events', 'Shop', 'Contact Us'];
    let hamburgerMenuDisplayClass = 'hidden';
    if (expandMobileMenu) {
        hamburgerMenuDisplayClass = 'block';
    }

    return (
        <nav className='flex flex-col'>
            <div className='fixed md:relative bg-white z-50 w-full' ref={navBarRef}>
                <div className="flex flex-row justify-between items-center mt-5 md:my-5 mx-5 md:mx-0 ">
                    <div className='flex flex-row items-center link-text'>
                        <Image src={'/logo.png'} alt="Toe Beans &amp; Dreams Logo" width={140} height={140}/>
                        <p className={`hidden md:inline md:text-base lg:text-lg pl-5`}> Toe Beans &amp; Dreams</p>
                    </div>
                    <div className='w-full max-w-full md:w-3/4 md:max-w-5xl'>
                        <div className={`hidden md:flex flex-row items-center link-text md:text-base lg:text-lg justify-between`}>
                            {menuItems.map((item, index) => <p key={index}> {item} </p>)}
                        </div>
                        <div className='flex flex-row justify-end md:hidden'>
                            <Image src={menuIcon} height={30} width={30} onClick={mobileMenuClicked}/>
                        </div>
                    </div>
                </div>
                <div className={`${hamburgerMenuDisplayClass} md:hidden link-text text-xl relative z-20`}>
                    <div className='absolute bg-white w-full'>
                        <hr />
                        {menuItems.map((item, index) => (
                            <div key={index} >
                                <p className='py-5 px-5'> {item} </p> 
                                <hr />
                            </div>
                            )
                        )}
                    </div>
                </div>
            </div>
            <div className='bg-white py-10 md:hidden' style={{height: navBarHeight}}>

            </div>
        </nav>
    );
}