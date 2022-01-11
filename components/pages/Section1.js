import Image from "next/image";
import { useInView } from "react-intersection-observer";
import cardImages from '../../public/type36.png';

export const Section1 = () => {

    const { ref, inView } = useInView({
        threshold: 0,
    })
    return (
        <div ref={ref} className="w-full mt-40 mb-10 px-20">
            <div className="w-full flex items-center justify-center">
                <div className="w-1/2">
                    <Image src={cardImages} height={600} width={770} className="opacity-50" />
                </div>
                <div className="w-1/2 flex flex-col gap-y-10 border-l-2 border-t-2 rounded-tl-3xl rounded-tr-full border-gray-600 py-16 drop-shadow-xl">
                    <div className="pl-10 pr-20 relative">
                        <div className="w-4 h-4 rounded-full bg-gray-700 absolute -left-2.5"></div>
                        <div className={`w-full px-5 py-5 bg-gray-800/50 backdrop-filter backdrop-blur-2xl backdrop-opacity-70 rounded-br-3xl rounded-tr-3xl rounded-bl-3xl drop-shadow-2xl animate__animated ${inView ? 'animate__fadeInUp animate__slow' : ''}`}>
                            <span className="text-gray-400 text-base tracking-wider font-medium">Web3, or Web 3.0, has been hailed by proponents as a decentralized version of the internet based on blockchain, the technology behind many major cryptocurrencies and nonfungible tokens, or NFTs.</span>
                        </div>
                    </div>
                    <div className="pl-10 pr-20 relative">
                        <div className="w-4 h-4 rounded-full bg-gray-700 absolute -left-2.5"></div>
                        <div className={`w-full px-5 py-5 bg-gray-800/50 backdrop-filter backdrop-blur-2xl backdrop-opacity-70 rounded-br-3xl rounded-tr-3xl rounded-bl-3xl drop-shadow-2xl animate__animated ${inView ? 'animate__fadeInUp animate__slower' : ''}`}>
                            <span className="text-gray-400 text-base tracking-wider font-medium">Ethereum operates on a decentralized computer network, or distributed ledger called a blockchain, which manages and tracks the currency. It can be useful to think of a blockchain like a running receipt of every transaction that's ever taken place in the cryptocurrency.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
