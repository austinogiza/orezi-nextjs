import HomeHero from "@/components/home/HomeHero"
import HomeWork from "@/components/home/HomeWork"
import Message from "@/components/Message"
import HeadTags from "@/container/HeadTags"
import styled from "styled-components"
import React, { useEffect, useState } from "react"
import loaderGIF from '@/assets/loader.gif'
import Image from 'next/image'
import {workUrl} from '@/api/constants'
import axios from "axios"

interface HomeProps{
  works: WorkArray[]
}


interface WorkArray{
  id: string, 
  title: string, 
  featured_image: any, 
  description:string,
  slug:string, 
}

const Index:React.FC<HomeProps>= props => {

  const {works}=props

  const [time, setTime]=useState<number>(4)
  const [loader, setLoader]=useState<boolean>(true)

  useEffect(()=>{

  

    window.setInterval(()=>{

setTime((timer)=> timer-1)
    },1000)

    if(time === 0){
      setLoader(false)
    }

  }, [time])
  return (
    <Body>
       <HeadTags title="Home - The Creative Mena"/>
       {loader?
       
      <>
      <Preloader>

<Image width={500} height={500} alt="The creativemena loader" src={loaderGIF} />
      </Preloader>
      </>:
      
      <>
      <HomeHero/>
      <HomeWork works={works}/>
      <Message/>      
      </>}

    </Body>
  )
}

const Body = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`
const Preloader = styled.div`

position: fixed;
background: #1F1E1D;
height: 100%;
width: 100%;
top:0;
left: 0;
z-index: 999;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const getServerSideProps= async ()=> {

  const res = await axios.get(workUrl)
  const works = res.data


  return {
    props:{
      works
     
    }
  }
}

export default Index
