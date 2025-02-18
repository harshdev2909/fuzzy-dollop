import React from 'react'
import { AuroraText } from './ui/AuroraText'
import { AnimatedGradientText } from './ui/AnimatedGradientText'
import { ChevronRight } from "lucide-react";
import { cn } from './lib/utils';

const Hero = () => {
    return (
        <div className='w-full h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat bg-black-50'>

            <div className='flex flex-col items-center justify-center h-full text-white'>
                <div className="justify-center flex items-center flex-col mb-10 ">
                    <AnimatedGradientText>
                        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                        <span
                            className={cn(
                                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                            )}
                        >
                            Book your slot now
                        </span>
                        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedGradientText>
                </div>
                <h1 className="text-4xl tracking-tighter md:text-5xl lg:text-5xl font-semibold">
                    Start your <AuroraText> Web and Web3</AuroraText> journey with us
                </h1><br></br>
                <p className='text-3xl text-violet-400 font-serif '>Join Our courses and get the firsthand knowledge about web and web3</p>
            </div>

        </div>
    )
}

export default Hero