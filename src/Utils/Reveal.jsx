/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"


export const RevealLeft = ({ children, width = '100%' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false }) 
  const mainControls = useAnimation()
  
  useEffect(() => {
    if (!isInView) {
      mainControls.start('hidden') // hide the animation
    } else {
      mainControls.start("visible")  // fire the animation
    }
  }, [isInView, mainControls])

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -300 },
          visible: { opacity: 1, x: 0 }
        }}
        initial={mainControls}
        animate={mainControls}
        transition={{ duration: 1.5, delay: 0, ease: 'easeIn' }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export const RevealRight = ({ children, width = '100%' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })
  const mainControls = useAnimation()
  useEffect(() => {
    if (!isInView) {
      mainControls.start('hidden') // hide the animation
    } else {
      mainControls.start("visible")  // fire the animation
    }
    // isInView ? mainControls.start("visible") : mainControls.start('hidden')
  }, [isInView, mainControls])

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 300 },
          visible: { opacity: 1, x: 0 }
        }}
        initial={mainControls}
        animate={mainControls}
        transition={{ duration: 1.5, delay: 0, ease: 'easeIn' }}
      >
        {children}
      </motion.div>
    </div>
  )
}