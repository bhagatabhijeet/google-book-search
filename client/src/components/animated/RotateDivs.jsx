import React from "react";
import { animated, useSpring, useTrail } from "react-spring";

// const items = [0,1,2];

// const styleObj = {
//   transformOrigin: "top left",
//   position: "relative",
//   height: "250px",
//   width: "250px",
// };

export default function RotateDivs({ children, ...props }) {
  // const springProps = useSpring({
  //   to: async next => {
  //     await next({backgroundColor:'blue',transform:'rotate(360deg)'})

  //   },

  //   from: { backgroundColor:'black',transform:'rotate(0deg)'},
  //   config: { duration: 3000,delay:props.delay },
  // })
  // const items = React.Children.toArray(children);
  const [trail, set] = useTrail(3, () => ({
    // transform:'rotate(360deg)',
    to: {
      height: "250px",
      width: "250px",
      backgroundColor: "#2ba2ff",
      opacity: 1,
    },
    from: {
      height: "0px",
      width: "0px",
      backgroundColor: "#2ba2ff",
      opacity: 0,
    },
    // config:config.default,
    // margin:'10px',
    config: { mass: 1, tension: 280, friction: 120 },
    // delay: i=>i*1000,
  }));
  // return <animated.span className="script-bf-box" style={{springProps}}>{props.children}</animated.span>
  // return(
  //   {trail.map((t,index)=><animated.div key={index} class={temp} style={t}/>)}

  return trail.map((animation, index, items) => (
    <animated.div className="animated-box" style={animation} key={items[index]}>
      {/* {items[index]} */}
    </animated.div>
  ));

  // <div className='tempWrapper' >
  // trail.map((animation, index) => (
  //   <animated.div className="temp" style={animation} key={index} />
  // ))
  // </div>
  // );
}
