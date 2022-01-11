import axios from "axios";
import Image from "next/image"
import { useEffect, useState } from "react";
import crypto from '../../public/crypto6.png';
import bitcoin from '../../public/crypto3.png';
import { useInView } from 'react-intersection-observer';

export const Crypto = () => {

    const { ref, inView } = useInView({
        threshold: 0,
    })

    const [getEthPrice, setEthPrice] = useState(); //Etherium
    const [getBitPrice, setBitPrice] = useState(); //Bitcoin

    useEffect(async () => {
        const ether = await axios('https://cex.io/api/last_price/ETH/USD');
        setEthPrice(await ether.data.lprice);

        const bit = await axios('https://cex.io/api/last_price/BTC/USD');
        setBitPrice(await bit.data.lprice);
    }, [axios])
    return (
        <div ref={ref}>
            <div className={`w-full mt-56 text-center`}>
                <span className="text-gray-300 font-medium text-5xl tracking-widest">CRYPTO MARKET AS FOR TODAY'S PRICE</span>
            </div>
            <div className="mt-32 w-full flex items-center justify-center mb-5 gap-x-48">
                <div className={`h-80 w-72 p-2 bg-gradient-to-t from-purple-500 to-gray-300 rounded-3xl static drop-shadow-2xl`}>
                    <div className="absolute bottom-48 drop-shadow-md">
                        <Image src={crypto} height={200} width={275} />
                    </div>
                    <div className="w-full mt-36 flex flex-col items-center justify-center">
                        <span className={`text-4xl font-bold text-gray-800 tracking-wide `}>ETHEREUM</span>
                        <span className={`mt-2 font-bold text-2xl text-gray-800 tracking-wide `}>
                            {new Intl.NumberFormat('en-IN').format(getEthPrice)} USD
                        </span>
                    </div>
                </div>
                <div className={`h-80 w-72 p-2 bg-gradient-to-t from-yellow-500 to-yellow-300 rounded-3xl static drop-shadow-2xl`}>
                    <div className="absolute bottom-48 drop-shadow-md">
                        <Image src={bitcoin} height={200} width={275} />
                    </div>
                    <div className="w-full mt-36 flex flex-col items-center justify-center">
                        <span className={`text-4xl font-bold text-gray-800 tracking-wide `}>BITCOIN</span>
                        <span className={`mt-2 font-bold text-2xl text-gray-800 tracking-wide `}>
                            {new Intl.NumberFormat('en-IN').format(getBitPrice)} USD
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
