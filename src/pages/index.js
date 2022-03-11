import * as THREE from "three";

import React, { useRef, Suspense, useState } from "react";
import {
  Canvas,
  useLoader,
  extend,
  useThree,
  useFrame,
} from "@react-three/fiber";
import { Html, Preload, OrbitControls } from "@react-three/drei";
import { Popconfirm } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

const store = [
  {
    name: "outside",
    color: "lightpink",
    position: [10, 0, -15],
    url: "/download.jpeg",
    link: 1,
  },
  {
    name: "inside",
    color: "lightblue",
    position: [15, 0, 0],
    url: "/reload.jpeg",
    link: 0,
  },
  // ...
];

function Dome({ name, position, texture, onClick }) {
  return (
    <group>
      <mesh>
        <sphereBufferGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
      <mesh position={position}>
        <sphereGeometry args={[1.25, 32, 32]} />
        <meshBasicMaterial color="white" />
        <Html center>
          <Popconfirm
            title="Are you sure you want to leave?"
            onConfirm={onClick}
            okText="Yes"
            cancelText="No"
          >
            <Link to="/esports"> Go to Conatct Page</Link>
          </Popconfirm>
        </Html>
      </mesh>
    </group>
  );
}

function Portals() {
  const [which, set] = useState(0);
  const { link, ...props } = store[which];
  const maps = useLoader(THREE.TextureLoader, store.map((entry) => entry.url)) // prettier-ignore
  return <Dome onClick={() => set(link)} {...props} texture={maps[which]} />;
}
// components

extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame with useFrame
  const controls = useRef();
  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={true}
      enableZoom={false}
    />
  );
};

const Index = () => {
  return (
    <>
      <Canvas frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.2}
          autoRotate={false}
          rotateSpeed={-0.5}
        />
        <Suspense fallback={null}>
          <Preload all />
          <Portals />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Index;
