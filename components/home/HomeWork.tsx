import styled from "styled-components"
import {Wrapper} from '@/container/Container'
import WorkCard from "@/components/WorkCard"
import {workUrl} from '@/api/constants'
import axios from "axios"
import { FC, useEffect, useState } from "react"

interface WorksProps {
  works:WorkArray[]
}


interface WorkArray{
  id: string, 
  title: string, 
  featured_image: any, 
  description:string,
  slug:string, 
}
const HomeWork:FC<WorksProps> = props => {
    
  
   const {works} =props

   
      useEffect(()=>{
      
      }, [])
      

    return (
        <Body className=' mt-10 mb-14'>
          {works && works.length > 0&& <>
 <Wrapper className="">

{works.map(work=>
 <WorkCard key={work.id} link={`/work/${work.slug}`} title={work.title} text={work.description} 
 src={work.featured_image}/>
)}
</Wrapper>

</>
          } 
        </Body>
    )
}




const Body = styled.div`
height: 100%;
width: 100%;
min-height: 300px;
`
const Cover = styled.div``



export default HomeWork
