import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { io } from 'socket.io-client';

export default function Star(props) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const [starShine, setStarShine] = useState(0);
  useFrame((state, deltaY) => (ref.current.rotation.y += 0.008));

  function doSetTimeout(i, degrade = false) {
    setTimeout(
      () => {
        return setStarShine(i);
      },
      !degrade ? i * 20 : (100 - i) * 20
    );
  }

  function colorClickHandler(event) {


    if (0 <= starShine && starShine < 5) {
      for (let i = starShine; i <= 100; i += 1) {
        doSetTimeout(i);
      }
    }
  }

  function starShineDecreaseBrightness() {
      console.log('starshine in decrease function',starShine)
    for (let j = starShine -1; j > 0; j -= 1) {
      doSetTimeout(j, true);
    }
  }
  if (starShine === 100) {
    starShineDecreaseBrightness();
  }

  return (
    <>
      <mesh 
      {...props}
      ref={ref}
       onClick={(event) => colorClickHandler(event)}
       onPointerOver={(event => hover(true))}
       onPointerOut={(event => hover(false))}>
        <sphereGeometry args={[.5,30, 30]} />
        <meshStandardMaterial
          roughness={0.1}
          metalness={0.1}
          flatShading={false}
          color={hovered ? 'white': props.color}
          emissive={'white'}
          emissiveIntensity={starShine / 100}
        />
      </mesh>
    </>
  );
}


/*
set interval vs set timeout -- 1 timer that calls a function
useRef - 
useEffect- 
*/