export const Eyes =({eyeOffsetX,eyeOffsetY,eyeRadius})=>(
    <>
    <circle cx={-eyeOffsetX} cy={ -eyeOffsetY} 
        
            r ={eyeRadius} 
            fill ="yellow"
            stroke ="lavender"
            stroke-width="10"
            />
<circle cx={ eyeOffsetX} cy={-eyeOffsetY} 
        
        r ={eyeRadius} 
        fill ="yellow"
        stroke ="lavender"
        stroke-width="10"
        />
        </>
);