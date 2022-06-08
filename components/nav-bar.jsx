import Image from 'next/image';
import logo from './logo.png';

import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <nav className="flex flex-row justify-between items-center my-5">
            <div className='flex flex-row items-center link-text'>
                <Image src={logo} alt="Toe Beans &amp; Dreams Logo" width={140} height={140}/>
                <p className={`${styles.title} pl-5`}> Toe Beans &amp; Dreams</p>
            </div>
            <div className={`flex flex-row items-center link-text ${styles['menu']}`}>
                <p>About Us</p>
                <p>Menu</p>
                <p>Adoption</p>
                <p>Events</p>
                <p>Shop</p>
                <p>Contact Us</p>
            </div>
        </nav>
    );
}