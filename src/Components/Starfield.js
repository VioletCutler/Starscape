import { Canvas, useFrame } from "@react-three/fiber";
import Box from "./Box";
import Star from "./Star";
import StarGenerator from "./StarGenerator";




export default function Starfield() {
  return (
    <Canvas>
      <ambientLight intensity={0.05} />
      <spotLight position={[-10, 0, 15]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Star position={[-2.2, 70, -100]} />
      <StarGenerator />
    </Canvas>
  );
}
