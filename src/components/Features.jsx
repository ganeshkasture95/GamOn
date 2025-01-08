import React from 'react'
import { TiLocationArrow } from 'react-icons/ti'
import BentoCard from './BentoCard'

const Features = () => {
    return (
        <section className='bg-black pb-52 pr-4'>
            {/* name section of the features */}
            <div className='container mx-auto px-3 md:px-18'>
                <div className='px-5 py-32'>
                    <p className='font-circular-web text-lg text-blue-50'>Into the Metagame Layer</p>

                    <p className='max-w-md font-circular-web text-lg text-blue-50  opacity-50' >
                        Immerse yourself in a rich and ever-expanding universe where a vibrant
                        array of products converge into an interconnected overlay experience
                        on your world.
                    </p>
                </div>



                {/* the actual bento grid of the features */}
                <div className='border-hsla relative mb-7 h-96 w-full  overflow-hidden rounded-md md:h-[65vh]'>
                    <BentoCard

                        src="videos/feature-1.mp4"
                        title={
                            <>radi<b>n</b>t</>
                        }
                        description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
                    // isComingSoon
                    />
                </div>

                <div className=' grid h-[135vh] grid-cols-2 grid-rows-3 gap-7 '>
                    <div className='bento-tilt_1 row-span-1 md:col-span-1 md:max-h-dvh md:row-span-2
                         '>
                        <BentoCard
                            src="videos/feature-2.mp4"
                            title={<>zig<b>m</b>a</>}
                            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
                        />

                    </div>
                    <div className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
                        <BentoCard
                        src="videos/feature-3.mp4"
                        title={<>b<b>l</b>aze</>}
                        description="A decentralized, community-driven, and gamified social network for the metaverse."
                        />
                    </div>
                    <div className='bento-tilt_1 me-14 md:col-span-1 md:me-0
                    '>
                        <BentoCard
                        src="videos/feature-4.mp4"
                        title={<>s<b>h</b>ine</>}
                        description="A cross-platform, AI-powered, and gamified productivity and learning platform."
                        />
                    </div>

                    <div className=' bento-tilt_2 '>
                        <div className='flex size-full flex-col justify-between bg-violet-300 p-5 '>

                            <h1 className='bento-title special-font'>
                                M<b>o</b>re coming soon!
                            </h1>
                            <TiLocationArrow className='m-5 scale-[5] self-end'/>
                        </div>
                    </div>

                    <div className='bento-tilt_2'>
                        <video src="videos/feature-5.mp4" loop muted autoPlay 
                        className='size-full object-cover object-center'/>
                       
                    </div>
                </div>


            </div>

        </section>
    )
}

export default Features