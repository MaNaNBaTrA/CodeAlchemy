import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import work from '/Svg/Work.svg';
import Download from '/Svg/Download.svg';
import Resume from '/Pdf/Resume.pdf';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
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
      <div className='w-full px-12'>
        <div
          ref={containerRef}
          className='w-full mt-12 mb-4 flex bg-Work rounded-3xl pl-12 pr-2 p-1 max-[600px]:flex-col max-[600px]:px-0 max-[600px]:pr-0'
        >
          <div className='flex-col flex flex-grow w-full'>
            <div className='text-5xl mt-7 max-[600px]:pl-6 max-[342px]:text-3xl max-[320px]:pr-1 max-[746px]:text-4xl font-light'>
              Let's make{' '}
              <span className='underline underline-offset-2 decoration-Highlight '>
                things
              </span>{' '}
              happen
            </div>
            <div className='text-2xl text-wrap pr-1 max-[784px]:text-lg max-[600px]:pl-6 mt-8 max-[342px]:text-base max-[320px]:pr-1'>
              Get in touch today to explore my web development services. For a detailed overview of my skills and experience, feel free to view my resume.
            </div>
            <div className='flex bg-black gap-6 mt-12 items-stretch mb-4 max-[600px]:pl-6 max-[320px]:pr-1 flex-wrap max-[1200px]:mt-8'>
              <span className='text-White bg-Black flex p-1 px-2 rounded-xl cursor-pointer text-2xl max-[600px]:text-lg '>
                Contact
              </span>
              <a
                href={Resume}
                download
                className='flex gap-2 items-center bg-Menu p-1 px-2 rounded-xl cursor-pointer text-2xl max-[600px]:text-lg'
              >
                <img src={Download} alt='Download' className='w-6' />
                Resume
              </a>
            </div>
          </div>
          <div className='min-w-[180px] self-center max-[600px]:max-w-[220px]'>
            <img src={work} alt='Work Illustration' className='object-contain' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
