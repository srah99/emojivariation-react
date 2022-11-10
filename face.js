import {BackgroundCircle} from './background-circle'
import{Eyes} from '.Eyes'
import {Mouth} from './Mouth'
import { FaceContainer } from './facecontainer'
import {Face} from './face.js'
export const face=({
    width,
    height,
    centerX,
    centerY,
    strokeWidth,
    eyeOffsetX,
    eyeOffsetY,
    eyeRadius,
    mouthRadius})=>(
<Face 
width={width}
height={height}
centerX = {width/2}
centerY ={height/2} 
strokeWidth ={10}
eyeOffsetX = {90}
eyeOffsetY ={100}
eyeRadius= {50}
mouthWidth ={20}
mouthRadius ={200}>
   <FaceContainer 
   width={width} height={height} 
   centerX={centerX} centerY={centerY}>
   
   <BackgroundCircle radius={centerY-strokeWidth/2} strokeWidth={strokeWidth}/>     
 
<Eyes eyeOffsetX={eyeOffsetX} eyeOffsetY={eyeOffsetY} eyeRadius={eyeRadius}/>
<Mouth />
</FaceContainer>
</Face>
);