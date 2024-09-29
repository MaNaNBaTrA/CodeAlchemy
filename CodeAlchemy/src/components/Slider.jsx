import React,{useRef,useEffect} from 'react';
import {gsap} from 'gsap';
import Html from '/Svg/Html.svg'
import Css from '/Svg/Css.svg'
import Express from '/Svg/Express.svg'
import Git from '/Svg/Git.svg'
import Github from '/Svg/Github.svg'
import Gsap from '/Svg/Gsap.svg'
import Js from '/Svg/Js.svg'
import Mongo from '/Svg/Mongo.svg'
import Next from '/Svg/Next.svg'
import Node from '/Svg/Node.svg'
import Postman from '/Svg/Postman.svg'
import ReactImg from '/Svg/React.svg'
import Tailwind from '/Svg/Tailwind.svg'
import Vite from '/Svg/Vite.svg'

const Slider = () => {

  const SliderRef = useRef(null);

  useEffect(()=>{
    const slider = SliderRef.current;

    const items = slider.querySelectorAll('span');
    const totalItems = items.length;

    [...items].forEach(item => {
      slider.appendChild(item.cloneNode(true)); 
    });

    const totalWidth = slider.scrollWidth / 2;

    gsap.to(slider, {
      x: -totalWidth, 
      duration: 30,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(value => parseFloat(value) % totalWidth) 
      }
    });
  }, []);

  return (
    <div className='flex  justify-center w-full'>
    <div className='mt-14 w-[90%] overflow-hidden px-6 justify-self-center max-[1024px]:w-[90%]'>
        <div ref={SliderRef}  className='h-20 flex gap-16 items-center justify-center'>
            <span ><img src={Html} alt="Img" className='h-[80px] min-w-[60px]'/></span>
            <span><img src={Css} alt="Img" className='h-[80px] min-w-[60px]' /></span>
            <span><img src={Js} alt="Img" className='h-[80px] min-w-[60px]'/></span>
            <span><img src={ReactImg} alt="Img" className='h-[80px] min-w-[60px]'  /></span>
            <span><img src={Node} alt="Img" className='h-[80px] min-w-[60px]' /></span>
            <span><img src={Express} alt="Img" className='h-[80px] min-w-[60px]' /></span>
            <span><img src={Mongo} alt="Img" className='h-[80px] min-w-[60px]' /></span>
            <span><img src={Git} alt="Img" className='h-[80px] min-w-[60px] relative top-3' /></span>
            <span><img src={Tailwind} alt="Img" className='h-[80px] min-w-[60px]' /></span>
            <span><img src={Vite} alt="Img" className='h-[80px] min-w-[60px]' /></span>
            <span><img src={Postman} alt="Img" className='h-[80px] min-w-[60px]' /></span>
            <span><img src={Gsap} alt="Img" className='h-[80px] min-w-[60px]' /></span>
            <span><img src={Next} alt="Img" className='h-[80px] min-w-[60px]' /></span>
            <span><img src={Github} alt="Img" className='h-[80px] min-w-[60px] relative top-2' /></span>
        </div>
    </div>
    </div>
  )
}

export default Slider
