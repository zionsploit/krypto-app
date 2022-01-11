import Image from "next/image"
import securityImage from '../../public/security.png';
import systemImage from '../../public/system.png';
import perspectiveImage from '../../public/perspective.png';
import { useInView } from "react-intersection-observer";

export const Footer = () => {
    const { ref, inView } = useInView({
        threshold: 0
    })
    return (
        <div ref={ref} className="w-full bg-gradient-to-b from-gray-900/40 to-gray-900/90 drop-shadow-2xl shadow-2xl backdrop-filter backdrop-opacity-25">
            <div className="w-full h-auto py-5">
                <div className="w-full text-center mb-16 mt-16">
                    <span className="text-5xl font-semibold tracking-widest text-gray-300">
                        FEATURES
                    </span>
                </div>
                <div className={`w-full flex items-center justify-center gap-x-20 animate__animated ${inView ? 'animate__fadeInUp animate__slow' : ''}`}>
                    <div className="px-5 py-5 bg-gray-800/10 backdrop-filter backdrop-opacity-80 bg-opacity-75 drop-shadow-2xl shadow-2xl rounded-3xl">
                        <div className="flex flex-col items-center justify-center">
                            <Image src={securityImage} height={250} width={320} />
                            <span className="text-purple-400 font-semibold text-3xl tracking-widest">Security</span>
                            <div className="w-[20em] px-[1em] py-[2.5em] h-[10em]">
                                <span className="text-gray-400 font-medium tracking-wider">It used a peer-to-peer connection with a cryptohash so continue to keep each and every activities safe, and all data sent over the network is encrypted.</span>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 py-5 bg-gray-800/10 backdrop-filter backdrop-opacity-80 bg-opacity-75 drop-shadow-2xl shadow-2xl rounded-3xl">
                        <div className="flex flex-col items-center justify-center">
                            <Image src={systemImage} height={250} width={320} />
                            <span className="text-purple-400 font-semibold text-3xl tracking-widest">System</span>
                            <div className="w-[20em] px-[1em] py-[2.5em] h-[10em]">
                                <span className="text-gray-400 font-medium tracking-wider">A decentralized platform that relies on community participation to be current and responsive to all requests and responses.</span>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 py-5 bg-gray-800/10 backdrop-filter backdrop-opacity-80 bg-opacity-75 drop-shadow-2xl shadow-2xl rounded-3xl">
                        <div className="flex flex-col items-center justify-center">
                            <Image src={perspectiveImage} height={250} width={320} />
                            <span className="text-purple-400 font-semibold text-3xl tracking-widest">Perspective</span>
                            <div className="w-[20em] px-[1em] py-[2.5em] h-[10em]">
                                <span className="text-gray-400 font-medium tracking-wider">We anticipate to expand, and we're continuously looking forward to ensure that when the time comes, we'll be ready.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-black/40 shadow-2xl rounded-t-full drop-shadow-2xl py-5 px-5 mt-5">
                <div className="text-center">
                    <h1 className="text-gray-400/90 font-medium tracking-wide">Design by @John Mark Banisilon</h1>
                </div>
            </div>
        </div>
    )
}
