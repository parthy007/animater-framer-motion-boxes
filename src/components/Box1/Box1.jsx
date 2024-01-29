import React, { useState } from 'react'
import {motion} from "framer-motion"

export default function Box1() {

    const [animate, setAnimate] = useState(false)

    return (
        <div className='box-container'>
            <motion.div 
                className="box"
                animate={{
                    x: animate? "70.7vw" : "0",
                    opacity: animate? 1:0.2,
                    scale: animate? 1.1:1,
                    rotate: animate? 360:0
                }}
                transition={{
                    type:"spring",
                    stiffness: 80
                }}
                initial={{
                    opacity:0.2,
                }}
                onClick={()=>setAnimate(!animate)}
            >
            </motion.div>
        </div>
    )
}
