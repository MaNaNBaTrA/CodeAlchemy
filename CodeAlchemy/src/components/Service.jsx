import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Service = () => {

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
    <div className='w-full mt-20 mb-4' ref={containerRef} id='services'>
        <div className='w-full flex flex-col px-12  max-[764px]:px-9'>
            <div className='flex w-3/4 items-center gap-4 text-Text max-[716px]:w-full max-[468px]:flex-col max-[468px]:items-start max-w-[700px] max-[902px]:items-start max-[716px]:items-center max-[678px]:items-start'>
                <span className='text-4xl bg-Menu p-1 rounded-md max-[560px]:text-3xl'>Services</span>
                <span className='text-lg max-[628px]:text-base max-[628px]:leading-4 text-wrap leading-5'>At CodeAlchemy, I offer a range of services to help people grow and succeed online. These services include...</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Service;
