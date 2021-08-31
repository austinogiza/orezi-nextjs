import React from "react"

interface ProgressProps{
    animationDuration:any,
    children:any,
    isFinished:any,
}

export const ProgressContainer:React.FC<ProgressProps>=props=>{

    const {animationDuration,children, isFinished} =props
return(

    <div className=' pointer-events-none' style={{

        opacity: isFinished? 0 :1,
        transition: `opacity ${animationDuration}ms linear`
    }}>

        {children}
    </div>
)

}