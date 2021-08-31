import React from 'react'
import styled, { keyframes } from 'styled-components'

const PageLoading:React.FC = () => {
    return (
       <Body>
           <Group>
               <Circle/>
               <Textgroup>
               <LightText/>
               <LightText/>
               <LightText/>
      
               </Textgroup>
           </Group>
 
           <Imager/>

      
           <Text/>
      
           <Shimmer>
               <ShimmerHalf/>
           </Shimmer>
       </Body>
    )
}


const Body =styled.div`
height: 450px;
width: 100%;
max-width: 1100px;

margin: 8px auto;
padding: 24px;
overflow: hidden;
position: relative;

`
const animationLoading = keyframes`
0%{
transform: translateX(-150%);
}

50%{
    transform: translateX(-60%);
}
100%{
    transform: translateX(150%);
}
`

const Shimmer = styled.div`
width: 100%;
top: 0;
left: 0;
height: 100%;
position: absolute;
animation: ${animationLoading} 1.5s infinite;
`

const ShimmerHalf = styled.div`
width: 50%;
height: 100%;
transform: skewX(-20deg);
background: rgba(255,255,255,0.8);
`
const Imager =styled.div`
height: 180px;
width: 100%;
margin: 16px 0;
background: #ddd;
`
const Text =styled.div`
height: 30px;
margin: 8px 0;
width: 100%;
background: #ddd;
`


const Group = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 80px;
`
const Circle = styled.div`
width: 60px;
height: 60px;
background: #ddd;
border-radius: 50%;
margin: 0 16px 0 0;
`
const Textgroup = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 80px;
`
const LightText =styled.div`
height: 10px;
width: 100%;
margin: 8px 0;
background: #ddd;
`

export default PageLoading
