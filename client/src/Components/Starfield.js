import { Canvas, useFrame } from "@react-three/fiber";
import Box from "./Box";
import Star from "./Star";
import StarGenerator from "./StarGenerator";
import { io } from 'socket.io-client';

async function handleClick(){
  console.log('button clicked')

  const response = await fetch('http://localhost:3000', {
    headers: {
      "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
"Access-Control-Allow-Headers": "Content-type, Authorization, X-Requested-With"
    }
  })
  const data = await response.json();
  console.log('Data from basic GET request', data);

  const socket = io("ws://localhost:3000", {
    extraHeaders: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-type, Authorization, X-Requested-With"
    },
    transports: ['websocket', 'polling', 'flashsocket'],
    // auth: {
    //   token: 'abc'
    // }
  });


  socket.emit("hello from client", 5, "6", {7: 8})
}


export default function Starfield() {
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    <Canvas>
      <ambientLight intensity={0.05} />
      <spotLight position={[-10, 0, 15]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Star position={[-2.2, 70, -100]} />
      <StarGenerator />
    </Canvas></div>
  );
}
