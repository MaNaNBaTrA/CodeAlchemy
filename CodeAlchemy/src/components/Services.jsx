import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Design from '/Svg/Design.svg';
import Animation from '/Svg/Animation.svg';
import Responsive from '/Svg/Responsive.svg';
import Management from '/Svg/Management.svg';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const containerRef = useRef(null);
    const serviceRefs = useRef([]);
  
    useEffect(() => {
      serviceRefs.current.forEach((service, index) => {
        gsap.fromTo(
          service,
          { 
            opacity: 0, 
            x: index % 2 === 0 ? -200 : 200, 
          }, 
          { 
            opacity: 1, 
            x: 0,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 100%', 
              end: 'bottom 80%',
              scrub: 1, 
              markers: false, 
            },
          }
        );
      });
    }, []);

    return (
        <>
            <div ref={containerRef} className='w-full mt-12 mb-4 px-12 max-[425px]:px-6 max-[365px]:pr-4 overflow-hidden '>
                <div className='flex w-full items-stretch max-[746px]:items-center flex-wrap justify-center gap-x-16 gap-y-7 max-[912px]:gap-x-8 max-[746px]:flex-col'>              
                    <div ref={(el) => serviceRefs.current[0] = el} className='flex border-solid border-black border-2 pl-4 py-4 rounded-3xl w-[45%] max-[912px]:w-[47%] max-[746px]:w-[60%] max-[604px]:w-[80%] max-[540px]:w-[95%] max-[425px]:w-[100%] shadow-Service'>
                        <div className='flex flex-col gap-y-4' >
                            <div className='bg-Menu self-start flex rounded-md p-1 min-[1184px]:text-xl min-[1184px]:p-2'>Web Design</div>
                            <div className=' text-sm max-[840px]:text-xs min-[1184px]:text-lg max-[425px]:text-[10px]'>Visually striking web designs that enhance user experience and reflect brand identity. Each design is crafted to engage users and drive results.</div>
                        </div>
                        <div className='w-full h-auto min-w-[140px] min-[1184px]:min-w-[180px] min-[1184px]:max-w-[224px] max-[746px]:max-w-[160px] max-[425px]:min-w-[110px] mt-2'><img src={Design} alt="" /></div>
                    </div>       
                    <div ref={(el) => serviceRefs.current[1] = el}  className='flex border-solid border-black border-2 pl-4 py-4 rounded-3xl w-[45%] max-[912px]:w-[47%] max-[746px]:w-[60%] max-[604px]:w-[80%] max-[540px]:w-[95%] max-[425px]:w-[100%] shadow-Service'>
                        <div className='flex flex-col gap-y-4 '>
                            <div className='bg-Menu self-start flex rounded-md p-1 min-[1184px]:text-xl min-[1184px]:p-2'>Web Animation</div>
                            <div className=' text-sm max-[840px]:text-xs min-[1184px]:text-lg max-[425px]:text-[10px]'>Craft captivating web animations that enhance user engagement and storytelling. Transform your website's visuals, creating dynamic experiences that capture attention and elevate brand identity.</div>
                        </div>
                        <div className='w-[300px] h-auto min-w-[140px] min-[1184px]:min-w-[180px] min-[1184px]:max-w-[224px] max-[746px]:max-w-[160px] max-[425px]:min-w-[110px] mt-3'><img src={Animation} alt="" /></div>
                    </div>       
                    <div ref={(el) => serviceRefs.current[2] = el}  className='mb-4 flex border-solid border-black border-2 pl-4 py-4 rounded-3xl w-[45%] max-[912px]:w-[47%] max-[746px]:w-[60%] max-[604px]:w-[80%] max-[540px]:w-[95%] max-[425px]:w-[100%] shadow-Service'>
                        <div className='flex flex-col gap-y-4 '>
                            <div className='bg-Menu flex self-start rounded-md p-1 min-[1184px]:text-xl min-[1184px]:p-2 text-nowrap'>Responsive Web</div>
                            <div className='text-sm max-[840px]:text-xs min-[1184px]:text-lg max-[425px]:text-[10px]'>Responsive design ensures visually engaging designs that adapt seamlessly across devices, enhancing user experience while maintaining brand identity. Tailored solutions that drive results and engagement.</div>
                        </div>
                        <div className='w-full h-auto min-w-[140px] min-[1184px]:min-w-[180px] min-[1184px]:max-w-[224px] max-[746px]:max-w-[160px] max-[425px]:min-w-[110px] mt-5'><img src={Responsive} alt="" /></div>
                    </div>       
                    <div ref={(el) => serviceRefs.current[3] = el}  className=' mb-4 flex border-solid border-black border-2 pl-4 py-4 rounded-3xl w-[45%] max-[912px]:w-[47%] max-[746px]:w-[60%] max-[604px]:w-[80%] max-[540px]:w-[95%] max-[425px]:w-[100%] shadow-Service'>
                        <div className='flex flex-col gap-y-4'>
                            <div className='bg-Menu self-start flex rounded-md p-1 min-[1184px]:text-xl min-[1184px]:p-2 text-nowrap'>Web Management</div>
                            <div className=' text-sm max-[840px]:text-xs min-[1184px]:text-lg max-[425px]:text-[10px]'>Web management services ensure your site runs smoothly, covering updates, security, performance optimization, and content management, allowing you to focus on your core business activities.</div>
                        </div>
                        <div className='w-full h-auto min-w-[140px] min-[1184px]:min-w-[180px] min-[1184px]:max-w-[224px] max-[746px]:max-w-[160px] max-[425px]:min-w-[110px] mt-3'><img src={Management} alt="" /></div>
                    </div>       
                </div>
            </div>
        </>
    )
}

export default Services;
