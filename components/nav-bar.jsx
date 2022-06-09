import Image from 'next/image';
import React, { useState, useCallback } from 'react';
import logo from './logo.png';

import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    const [expandMobileMenu, setExpandMobileMenu] = useState(false);
    const mobileMenuClicked = useCallback(() => {
        console.log('clicked');
        setExpandMobileMenu((isExpanded) => {
            return !isExpanded
        });
    }, [])

    const menuItems = ['About Us', 'Menu', 'Adoption', 'Events', 'Shop', 'Contact Us'];
    let hamburgerMenuDisplayClass = 'hidden';
    if (expandMobileMenu) {
        hamburgerMenuDisplayClass = 'block';
    }

    return (
        <nav className='mx-5 md:mx-0 flex flex-col'>
            <div className="flex flex-row justify-between items-center my-5">
                <div className='flex flex-row items-center link-text'>
                    <Image src={logo} alt="Toe Beans &amp; Dreams Logo" width={140} height={140}/>
                    <p className={`hidden md:inline md:text-base lg:text-lg pl-5`}> Toe Beans &amp; Dreams</p>
                </div>
                <div className='w-full max-w-full md:w-3/4 md:max-w-5xl'>
                    <div className={`hidden md:flex flex-row items-center link-text md:text-base lg:text-lg justify-between`}>
                        {menuItems.map((item, index) => <p key={index}> {item} </p>)}
                    </div>
                    <div className='flex flex-row justify-end md:hidden'>
                        <span className="material-icons" onClick={mobileMenuClicked}>menu</span>  
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
        </nav>
    );
}