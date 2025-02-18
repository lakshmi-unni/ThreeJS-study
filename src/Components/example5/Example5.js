import { Canvas } from '@react-three/fiber'
import React from 'react'
import Experience from './Experience'

const Example5 = () => {
  return (
<Canvas classname="m-0 p-0 w-full h-screen sm:h-[80vh] md:h-[70vh] lg:h-[60vh]" style={{ margin: 0, padding: 0, width: '100%', height: '100%' }}><Experience/>
   </Canvas>
  )
}

export default Example5