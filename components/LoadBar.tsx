import React from "react"

interface LoadProps{
    animationDuration:any, 
    progress:any
}


export const LoadBar:React.FC<LoadProps> =props=>{
       const {animationDuration, progress}=props

return(
<div className='h-2 orezi-bg w-full fixed z-50 left-0 top-0' style={{marginLeft: `${(-1 + progress)*100}%`, transition: `margin-left ${animationDuration}ms linear`}}></div>

)
}