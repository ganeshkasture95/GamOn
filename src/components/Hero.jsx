import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

    // states to change the hero section videos
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);
    // total no of videos 
    const totalVideo = 4;
    const nextVideoRef = useRef(null);


    const handelVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    }

    // logic for the videos to be only 4 and not ahed theat
    // 0 % 4 = 0 +1 =1
    // 1 % 4 = 1 +1 =2
    // 2 % 4 = 2 +1 =3
    // 3 % 4 = 3 +1 =4
    // 4 % 4 = 0 +1 =1

    const upcommingVideoIndex = (currentIndex % totalVideo) + 1;

    // on clivk the div of the small video we change the video
    const handleMiniVdClip = () => {

        setHasClicked(true);
        setCurrentIndex(upcommingVideoIndex);
    }

    // no of videos loaded
    useEffect(() => {
        if (loadedVideos === 2) {
            setIsLoading(false);
        }
    }, [loadedVideos])

    // animation of the center video to the full screen 
    // and the next to the center screen
    useGSAP(() => {
        // 
        if (hasClicked) {
            gsap.set('#next-video', { visibility: 'visible' });

            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => nextVideoRef.current.play()
            })

            gsap.from('#current-video', {

                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',

            })
        }
    }, { dependencies: [currentIndex], revertOnUpdate: true })


    // animation of the full video to the traphizum 
    // on scroal 
    useGSAP(() => {


        gsap.set('#video-frame', {
            clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
            borderRadius: '0 0 40% 10%'
        })

        gsap.from("#video-frame", {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true


            }
        })


    })

    const getViseoSrc = (index) => `videos/hero-${index}.mp4`;

    return (
        <div className="relative h-dvh  w-screen overflow-x-hidden ">

            {isLoading && (
                <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
                    <div className="three-body">
                        <div className="three-body__dot" />
                        <div className="three-body__dot" />
                        <div className="three-body__dot" />
                    </div>
                </div>
            )}
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75 ">
                <div>
                    <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg ">
                        <div onClick={handleMiniVdClip} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                            <video
                                ref={nextVideoRef}
                                src={getViseoSrc(upcommingVideoIndex)}
                                loop
                                autoPlay
                                muted
                                id="current-video"
                                className="size-64 origin-center scale-150 object-cover object-center"
                                onLoadedData={handelVideoLoad}
                            />
                        </div>
                    </div>
                    <video
                        ref={nextVideoRef}
                        src={getViseoSrc(currentIndex)}
                        autoPlay
                        muted
                        loop
                        id="next-video"
                        className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                        onLoadedData={handelVideoLoad}
                    />

                    <video src={getViseoSrc(currentIndex === totalVideo - 1 ? 1 : currentIndex)}
                        autoPlay
                        loop
                        muted
                        className="absolute left-0 top-0 size-full object-cover object-center"
                    />
                </div>

                <h1 className=" special-font hero-heading absolute bottom-5 right-5  z-40 text-blue-75">
                    G<b>a</b>ming
                </h1>

                <div className=" absolute left-0 top-0 z-40 size-full">
                    <div className="mt-24 px-5 sm:px-10 ">
                        <h1 className="special-font hero-heading  text-blue-100 ">
                            redefi<b>n</b>e
                        </h1>
                        <p className="mb-5 max-w-64 font-robert-regular text-blue-100">Enter the Metagame Layer <br />
                            Unleash the Play Economy
                        </p>

                        <Button
                            id="watch-trailer"
                            title="Watch Trailer"
                            leftIcon={<TiLocationArrow/>}
                            containerClass="!bg-yellow-300 flex-center gap-1"

                        />
                    </div>
                </div>
            </div>

            <h1 className=" special-font hero-heading absolute bottom-5 right-5  text-black">
                G<b>a</b>ming
            </h1>

        </div>
    )
}

export default Hero