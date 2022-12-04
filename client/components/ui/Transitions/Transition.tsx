import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

interface TransitionProps {
    children: React.ReactNode
    className?: string
}

const variants = {
    hidden: {
        opacity: 0,
        y: -150,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
}

const Transition: React.FC<TransitionProps> = ({ children }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <motion.div
            variants={variants}
            initial={{
                opacity: 0,
                y: 0,
            }}
            transition={{ delay: 0.3 }}
            animate={isInView ? 'animate' : 'hidden'}
            ref={ref}
        >
            {children}
        </motion.div>
    )
}

export default Transition
