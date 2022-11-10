import{arch} from d3;
export const Mouth = ({mouthRadius,mouthWidth})=>{
    const mouthArch=arch()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius+mouthWidth)
    .startAngle(Math.PI/2)
    .endAngle(MATH.PI*3/2);

    return <path d={mouthArch()}/>
};