/* eslint-disable */
import  { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, act, useFrame } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { HexColorPicker } from "react-colorful"
import { proxy, useProxy } from "valtio"
import logo from './resources/image.png'
import left from './resources/chevron-left-solid.svg'
import right from './resources/chevron-right-solid.svg'
import { useParams } from "react-router-dom"

const state = proxy({
  current: null,
  items: {
    upper: "#ffffff",
    lower: "#ffffff",
    frontPouch: "#ffffff",
    hanger: "#ffffff",
    rightHandle: "#ffffff",
    leftHandle: "#ffffff",
    mainZipper: "#ffffff",
    pouchZipper: "#ffffff",
  },
})
const rotationState = proxy({
  current : null
})

function Bag() {
  const ref = useRef()
  const snap = useProxy(state)
  const { nodes, materials } = useGLTF("bag.glb")

  useFrame((states) => {
    const t = states.clock.getElapsedTime()
    ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
    ref.current.rotation.x = Math.cos(t / 4) / 8
    ref.current.rotation.y = Math.sin(t / 4) / 8
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10

    if(rotationState.current){
      switch(rotationState.current){
        case("mesh"):
          
          break;
      }
        
    }
  })

  const [hovered, set] = useState(null)
  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(hovered ? cursor : auto)}'), auto`
  }, [hovered])

  return (
    <group
      ref={ref}
      dispose={null}
      scale={[0.3, 0.6, 0.5]}
      position={[0, 3, 0]}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}>
      <mesh geometry={nodes.bag.geometry} material={materials.upper} material-color={snap.items.upper} />
      <mesh geometry={nodes.bag_1.geometry} material={materials.lower} material-color={snap.items.lower} />
      <mesh geometry={nodes.bag_2.geometry} material={materials.frontPouch} material-color={snap.items.frontPouch} />
      <mesh geometry={nodes.bag_3.geometry} material={materials.hanger} material-color={snap.items.hanger} />
      <mesh geometry={nodes.bag_4.geometry} material={materials.rightHandle} material-color={snap.items.rightHandle} />
      <mesh geometry={nodes.bag_5.geometry} material={materials.leftHandle} material-color={snap.items.leftHandle} />
      <mesh geometry={nodes.bag_6.geometry} material={materials.mainZipper} material-color={snap.items.mainZipper} />
      <mesh geometry={nodes.bag_7.geometry} material={materials.pouchZipper} material-color={snap.items.pouchZipper} />
    </group>
  )
}

function Picker() {
  const snap = useProxy(state)
  const [activeColor, setActiveColor] = useState('')

  const handleColorChange = (color) => {
    state.items[snap.current] = color;
    setActiveColor(color);
  }

  const updateStateItem = (action) => {
    const itemKeys = Object.keys(state.items);
    const currentIndex = itemKeys.indexOf(state.current);
    
    if (action === '-') {
      const previousIndex = (currentIndex - 1 + itemKeys.length) % itemKeys.length;
      rotationState.current = state.current = itemKeys[previousIndex];
      console.log(rotationState);
    } else if (action === '+') {
      const nextIndex = (currentIndex + 1) % itemKeys.length;
      rotationState.current = state.current = itemKeys[nextIndex];
    }
  };

  const shadow = "rgba(197,225,213, 0.25) 0px 54px 55px, rgba(197,225,213, 0.12) 0px -12px 30px, rgba(197,225,213, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px 0px 0px"

  return (
      <>
      <div className="nav">
        <div style={{display:"flex"}}>
          <img id = "left" src={left} alt="" style={{height:"40px", margin:"5px 10px"}}/> <h1>Eclat Pegasus 40 <br />$160</h1>
        </div>
        <div><img src={logo} alt="" /></div>
        <div><button><h1 style={{fontSize:"14px"}}>Login to save</h1></button></div>
      </div>
        <div className="picker" style={{display : snap.current? 'initial' : 'none'}}>
            <div className="picker-title" style={{display:'flex'}}>
               <div id = "left" onClick={() => updateStateItem("-")}>
                <img src={left} alt="" />
              </div>
              <div style={{textAlign:'center'}}>
                <a>{snap.current}</a>
              </div>
              <div id="right" onClick={() => updateStateItem("+")}>
                { <img src={right} alt="" /> }
              </div> 
              
            </div>
          <div className="picker-flex">
            <div className="picker-color color-141414" style={{ backgroundColor:"#141414"}} onClick={() => handleColorChange("#141414") }></div>
            <div className="picker-color" style={{ backgroundColor:"#ffffff", boxShadow : activeColor == "#ffffff"? shadow : "none"}} onClick={() => handleColorChange("#ffffff")}></div>
            <div className="picker-color" style={{ backgroundColor:"#d9d7c9", boxShadow : activeColor == "#d9d7c9"? shadow : "none"}} onClick={() => handleColorChange("#d9d7c9")}></div>
            <div className="picker-color" style={{ backgroundColor:"#c5e1d5", boxShadow : activeColor == "#c5e1d5"? shadow : "none"}} onClick={() => handleColorChange("#c5e1d5")}></div>
            <div className="picker-color" style={{ backgroundColor:"#d6f4fd", boxShadow : activeColor == "#d6f4fd"? shadow : "none"}} onClick={() => handleColorChange("#d6f4fd")}></div>
            <div className="picker-color" style={{ backgroundColor:"#242888", boxShadow : activeColor == "#242888"? shadow : "none"}} onClick={() => handleColorChange("#242888")}></div>
            <div className="picker-color" style={{ backgroundColor:"#d94c45", boxShadow : activeColor == "#d94c45"? shadow : "none"}} onClick={() => handleColorChange("#d94c45")}></div>
            <div className="picker-color" style={{ backgroundColor:"#e79faf", boxShadow : activeColor == "#e79faf"? shadow : "none"}} onClick={() => handleColorChange("#e79faf")}></div>
            <div className="picker-color" style={{ backgroundColor:"#bd5caf", boxShadow : activeColor == "#bd5caf"? shadow : "none"}} onClick={() => handleColorChange("#bd5caf")}></div>
          </div>
    
        </div>
      
      </>
  )
}

export default function Customizer() {
  
  return (
    <>
      <Canvas concurrent pixelRatio={[1, 1.5]} camera={{ position: [0, 0, 2.75] }}>
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
        <Suspense fallback={null}>
            <Bag />
          <Environment files="royal_esplanade_1k.hdr" />
          <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={2} far={1} />
        </Suspense>
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
      </Canvas>
      <Picker />
    </>
  )
}
/* eslint-enable */
