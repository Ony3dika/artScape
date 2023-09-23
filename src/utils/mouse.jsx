import { useState,useEffect } from "react";

export default function useMousePosition(){
  const [mousePosition, setMousePosition] = useState({x:0,y:0})

  const updatePosition = (e)=>{
    setMousePosition({x:e.clientX, y:e.clientY})
  }

  useEffect(() => {
    window.addEventListener("mousemove", updatePosition)

    return()=>{
      window.removeEventListener("mousemove", updatePosition)
    }
    
  }, [])

   return mousePosition

  
}