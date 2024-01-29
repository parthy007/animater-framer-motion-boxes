import React, { useState } from 'react'
import {motion, useAnimation} from "framer-motion"

export default function Box5() {

    const control = useAnimation();
    return (

        
        <div className='box-container'>
            <button 
                className='controlBtn' 
                onClick={()=>control.start({
                    x:0,
                    transition:{
                        duration:2
                    }
                })}
            >
                Move Left
            </button>
            <button 
                className='controlBtn' 
                onClick={()=>control.start({
                    x:"70.7vw",
                    transition:{
                        duration:2
                    }
                })}
            >
                Move Right
            </button>
            <button 
                className='controlBtn' 
                onClick={()=>control.start({
                    borderRadius:"50%",
                    transition:{
                        duration:1
                    }
                })}
            >
                Turn Circle
            </button>
            <button 
                className='controlBtn' 
                onClick={()=>control.start({
                    borderRadius:0,
                    transition:{
                        duration:1
                    }
                })}
            >
                Turn Square
            </button>
            <button 
                className='controlBtn' 
                onClick={()=>control.stop()}
            >
                Stop
            </button>
            <motion.div 
                className='box'
                animate={control}
            >
            </motion.div>
        </div>
    )
}
