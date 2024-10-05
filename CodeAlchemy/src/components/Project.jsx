import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, y: 100 }, 
      {
        opacity: 1, 
        y: 0, 
        duration: 1.5, 
        ease: 'power2.out', 
        scrollTrigger: {
          trigger: element,
          start: 'top 95%', 
          end: 'bottom 50%', 
          scrub: 0.5, 
          markers: false, 
        },
      }
    );
  }, []);

  return (
    <>
      <div className='mt-20 mb-4' ref={containerRef}>
        <div className=' flex px-12 gap-4 w-3/4 items-start max-[1028px]:w-full  max-[620px]:flex-col min-[1314px]:items-center'>
          <div className=' text-Text inline-flex text-4xl bg-Menu p-1 rounded-md max-[560px]:text-3xl items-center max-w-fit'>Projects</div>
            <span className='text-lg leading-5 max-[628px]:text-base max-[628px]:leading-4'>
              Not convinced by words alone? Let my projects speak for themselves, showcasing my ability to create amazing and dynamic web experiences with a focus on design and user satisfaction.
            </span>
        </div>  
      </div>
    </>
  );
}

export default Project;
