import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

const PortfolioCard = ({i, title, description, src, link, color, progress, range, targetScale}) => {

    // console.log("range: ",range);
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end','start start']
    });

    const imageScale = useTransform(scrollYProgress, [0,1], [2,1])
    const scale = useTransform(progress, [0,3], [1, targetScale]);

    return (
    <div ref={container} className='flex flex-col justify-center items-center h-[100vh] sticky top-0'>
        <motion.div className='h-[35rem] sm:h-[30rem] w-[95%] sm:w-[85%] rounded-lg relative  sm:top-[10%]' style={{scale: scale, backgroundColor: color, top: `calc(-2% + ${i * 25}px)`}}>
            <h2 className='w-full text-center p-3 text-3xl font-bold'>{title}</h2>
            <div className='flex flex-col sm:flex-row gap-2 sm:gap-6'>
                <div 
                    className='w-full sm:w-[70%] h-[15rem] sm:h-[25rem] rounded-lg sm:ml-4 overflow-hidden'
                    >
                    <motion.div className='h-full w-full' style={{scale:imageScale}}>
                        <img src={`/images/${src}`} alt="" 
                        className='w-full h-full object-contain object-top'/>
                    </motion.div>
                </div>
                <div className='p-2 sm:w-[30%]'>
                    {description}
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default PortfolioCard