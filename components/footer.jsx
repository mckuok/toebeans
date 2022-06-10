import Image from 'next/image';
import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <div className={`w-full flex flex-col lg:flex-row content-start justify-start lg:justify-between py-11 px-16 text-xl gap-y-10 ${styles.background}`}>
            <div className='hidden lg:block'>
                <Image src='/logo.png' width={60 * 2.5} height={60 * 2.5}/>
            </div>
            <div>
                <div className={`${styles.newsletter} text-center`}>
                    <p className="link-text">sign up for our newsletter</p>
                </div>
                <div className={`flex flex-row flex-wrap justify-start lg:justify-between relative content-center pt-8 px-0 lg:px-5 gap-x-10 lg:gap-x-0 gap-y-8 ${styles['icons-color']}`}>
                    <Image src={'/footer/facebook.svg'} width={30} height={30}/>
                    <Image src={'/footer/instagram.svg'} width={30} height={30}/>
                    <Image src={'/footer/email.svg'} width={30} height={30}/>
                    <Image src={'/footer/gift.svg'} width={30} height={30}/>
                </div>
            </div>
            <div>
                <table className={`table-auto leading-relaxed ${styles['hours-table']}`}>
                    <tbody>
                        <tr>
                            <td>Moday-Thursday</td>
                            <td>7:30am - 6pm</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>7:30am - 8pm</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>8:30am - 8pm</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>8:30am - 6pm</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='leading-relaxed'>
                <p className='font-semibold'> Toe Beans & Dreams Adoption Cafe </p>
                <p> Pearl Kai Shopping Center </p>
                <p> 98-199 Kamehemeha Hwy Unit E-7 </p>
                <p> Aiea, Hawaii, 96701  </p>
            </div>

        </div>
    )
}