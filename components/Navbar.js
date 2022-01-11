import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.png';

export const Navbar = () => {
    return (
        <div>
            <div className='w-screen h-14 px-5 py-5 flex items-center justify-between'>
                <div className='px-10 pt-5 flex items-center gap-x-3'>
                    <Image src={logo} alt="Logo" height={50} width={50} />
                    <Link href={`/`}>
                        <a className='text-white text-2xl tracking-widest uppercase font-medium'>Krypto</a>
                    </Link>
                </div>
                <div className='flex gap-x-10 text-gray-400 px-10 tracking-wide font-medium'>
                    <Link href={`/gallery`}>
                        <a className={`hover:text-gray-300 transition-all`}>Gallery</a>
                    </Link>
                    <Link href={`/market-place`}>
                        <a className={`hover:text-gray-300 transition-all`}>Marketplace</a>
                    </Link>
                    <Link href={`/company`}>
                        <a className={`hover:text-gray-300 transition-all`}>Company</a>
                    </Link>
                    <Link href={`/pricing`}>
                        <a className={`hover:text-gray-300 transition-all`}>Pricing</a>
                    </Link>
                    <span className='font-semibold text-gray-700 px-3'>|</span>
                    <Link href={`/register`}>
                        <a className={`hover:text-gray-300 transition-all`}>Register</a>
                    </Link>
                    <Link href={`/login`}>
                        <a className={`hover:text-gray-300 transition-all`}>Login</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
