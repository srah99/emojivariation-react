import React from'react'
import ReactDOM from 'react-dom'
import {range}from D3;
//.enter() //this happens fromt hecode snippets if you type d3
// .append('line')
// .attr('x1', )
// .attr('y1', )
// .attr('x2', )
// .attr('y2', );
import { checkPropTypes } from 'prop-types'

console.log(arc)

console.log(ReactDOM);

const width=160 //we can use math on these constants
const height=160

const array = range(5 * 3);

const App =()=>array.map(()=>(
<Face 
width={width}
height={height}
centerX = {width/2}
centerY ={height/2} 
strokeWidth ={10}
eyeOffsetX = {90}
eyeOffsetY ={100}
eyeRadius= {5 + Math.random()* 10}
mouthWidth ={20}
mouthRadius ={200}/>
    ));      

console.log(mouthArch);

const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//     <StrictMode>
//       <App />
//     </StrictMode>
//   );

ReactDOM.render(<App />, rootElement);
