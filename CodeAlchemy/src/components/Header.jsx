import React from 'react'
import HeaderImg from '/Svg/Header.svg'

const Header = () => {
  return (
    <>
    <div className='w-full'>
        <div className='w-full flex px-12 mt-8 max-[678px]:flex-col max-[770px]:px-8 max-[678px]:justify-center max-[678px]:items-center max-[468px]:mt-6'>
            <div className='w-1/2 flex flex-col px-2 gap-6 py-5 max-[1024px]:gap-4 max-[984px]:gap-3 max-[678px]:w-full max-[678px]:justify-center max-[678px]:pt-3 max-[678px]:gap-6 6 text-Text'>
                <span className='font-light font-Grotesk text-5xl max-[1024px]:text-5xl max-[984px]:text-4xl max-[792px]:text-3xl max-[678px]:text-5xl max-[468px]:text-4xl'>Where <span className='underline decoration-Highlight underline-offset-4'> Code </span> Transforms, and <span className='underline underline-offset-4 decoration-Highlight '>Ideas</span> Come to Life.</span>
                <span className='font-Grotesk text-xl max-[1024px]:text-lg max-[984px]:text-lg max-[792px]:text-base max-[678px]:text-xl max-[468px]:text-lg'>At Code Alchemy, I blend creativity and technical expertise to create seamless, interactive, and visually striking web experiences. From turning ideas into code to delivering responsive, user-centric solutions, I’m committed to transforming the digital landscape with each project I undertake.</span>
                <div className='text-lg max-[1024px]:text-base max-[984px]:text-sm max-[792px]:text-xs max-[678px]:text-lg max-[468px]:text-base'>Let’s craft something <span className='underline decoration-Highlight underline-offset-2'>extraordinary</span> together!</div>
            </div>
            <div className='flex items center justify-center w-1/2 pb-2 relative max-[800px]:left-7 left-7 max-[678px]:w-full max-[678px]:left-0'><img src={HeaderImg} alt="Img" className=''/></div>
        </div>
    </div>
    </>
  )
}

export default Header
