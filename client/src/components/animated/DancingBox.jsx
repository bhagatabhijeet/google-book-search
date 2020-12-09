import React,{useEffect,useState} from "react";
import { animated, useSpring, useTransition } from "react-spring";
import io from 'socket.io-client';
import notification from '../../assets/notification.gif'
import {socket} from '../../App';
import InfoIcon from '@material-ui/icons/Info';

// const socket = io();//'http://localhost:3001'
export default function DancingBox({type}) {
  
  const [conCount,setConCount] = useState(1);
  // const [col,setCol]=useState('');
  
  useEffect(() => {
    socket.on('connections_established',cons=>{
      setConCount(cons);
      console.log(cons);
      // setCol("black");      
      set({backgroundColor:'#2ba2ff'});      
    });
    socket.on('connection_disconnected',cons=>{
      setConCount(cons);
      console.log(cons);
      // setCol('blue')
      set({backgroundColor:'#2ba2ff'});       
    });
  });

  // const transitions = useTransition(conCount,null,{   
  //   from: { x: 0 },
  //   to: { x: 1 },
  //     enter: { x: 0 },
  //   leave: { x: 1 },
  //   config: {mass: 1, tension: 500, friction: 10,velocity:60},
  // });

  //TRY*****************************
  // const transitions = useTransition(conCount, null, {
  //   from: { position: 'absolute', opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  //   })
  //   return transitions.map(({ item, key, props }) =>
  //   item && <animated.div key={key} style={{...props,backgroundColor:'black',color:'red'}}>{JSON.stringify(item)}</animated.div>
  //   )
  //******************************* */
  
  const [props, set, stop] = useSpring(()=>({   
    from: { backgroundColor: "#fff"},
    to: async (next)=>{
      await next({backgroundColor: 'blue'})
      await next({backgroundColor: '#2ba2ff'})
      await next({backgroundColor: 'white'})
    },
    // connns:1,
    // config:{duration:1000}
    config: {mass: 1, tension: 500, friction: 10},
  }));
  return (
    <animated.div
      style={{ position: "relative",
      //  backgroundColor: "green", 
      //  backgroundImage:`url(${notification})`,
      //  backgroundRepeat: 'no-repeat',
  // backgroundSize: props.x.interpolate({range:[0.1, 0.2, 0.6, 1],output:[0,100,100,0]}).interpolate(o=>`${o}px`),
  // backgroundSize:0,
       color: "#202124",
      //  display:'inline-block',
       width:'100%',
       height:'100%',
       padding:5,
      //  margin:10,
      //  borderRadius:10,
       textAlign:'center',
       fontSize:12,
       ...props
      //  marginLeft:props.x.interpolate({
      //   range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
      //   output: [-100, 30, -100, 30, -100, 30, -100, 0]
      //  })
      }}
    >
      <InfoIcon/>
      {type==='user'?` ${conCount} users searching books on this site`:`book was saved by user a big name book this is really a long long book name`}
    </animated.div>


  // return transitions.map(({ item, key, props })=> item && 
  //   <animated.div
  //   key={key}
  //     style={{ position: "relative",
  //      backgroundColor: "black", 
  //      color: "red" ,
  //      width:'300px',
  //     //  height:70,
  //      marginLeft:props.x.interpolate({
  //       range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
  //       output: [-10, 10, -10, 10, -10, 10, -10, 0]
  //      })
  //     }}
  //   >
  //     {`Total Connected Users ${item} ${children}`}
  //   </animated.div>
  )
}
