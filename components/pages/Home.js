import Image from 'next/image';
import etherImage from '../../public/ether.png';
import { useInView } from 'react-intersection-observer';

export const Home = () => {
    const { ref, inView } = useInView({
        threshold: 0,
    })

    return (
        <div>
            <div ref={ref} className={`w-full flex items-center justify-center`}>
                <div className={`flex flex-col items-start`}>
                    <span className='font-medium tracking-widest text-green-400 text-xs'>INSTANT, SECURE, PRIVATE</span>
                    <span className='text-5xl text-gray-200 font-bold tracking-wider mb-1'>TOGETHER WE BUILD THE FUTURE.</span>
                    <span className='text-2xl text-gray-500 mb-10 tracking-wide'>Make your crypto transactions easier.</span>
                    <span className='text-xl text-gray-500 mb-5 w-96 tracking-wide border-l-2 border-green-600 pl-2'>Trade and store a wide variety of digital currencies such as Bitcoin and Ethereum on a secure exchange platform.</span>
                    <button className='bg-gradient-to-r from-green-700 to-green-500 px-8 text-lg text-gray-200 font-medium py-3 tracking-wide rounded-2xl hover:from-green-800 hover:to-green-600 transition-colors drop-shadow-md'>Try Free Trial</button>
                </div>
                <div>
                    <Image src={etherImage} alt="Ether Images" height={550} width={550} className={`animate__animated animate__slower animate-pulse animate__infinite`} />
                </div>
            </div>
        </div>
    )
}
