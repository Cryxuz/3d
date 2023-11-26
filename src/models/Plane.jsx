import { useEffect, useRef } from 'react'
import planeScene from '../assets/3d/plane.glb'
import {useAnimations, useGLTF} from '@react-three/drei'

const Plane = ({isRotating, ...props}) => {
  const ref = useRef()
  const {scene, animations} = useGLTF(planeScene)
  const {mixer} = useAnimations(animations, ref)

  useEffect(() => {
    const clips = animations.map((clip) => mixer.clipAction(clip));
    clips.forEach((clip) => clip.play());
  
    return () => {
      clips.forEach((clip) => clip.stop());
    };
  }, [animations, mixer]);

  return (
    <mesh position={[-4.5, -1, 0.0]} scale={[0.012, 0.012, 0.012]} {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Plane