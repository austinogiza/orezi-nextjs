import styled from "styled-components"
import {projectTitle, workTitle} from '@/styles/TextStyles'
import { Wrapper } from "@/container/Container"
import HeadTags from "@/container/HeadTags"
import Image from 'next/image'
import {useRouter} from "next/router"
import React, { useEffect, useState } from "react"
import { workDetailUrl } from "@/api/constants"
import axios from "axios"
import PageLoading from "@/components/PageLoading"


interface WorkDetailsProps{
    works: any,
    title: string,
    featured_image:any,
    length:string,
    software:string,
    role:string,
    outcome:string,
    overview:string,
    top_text:string,
    problem_statement:string,
    bottom_text:string,
    pageError?:(err: any) => boolean

}

const WorkDetails:React.FC<WorkDetailsProps> = props => {

const {title,featured_image,length,software,role,outcome,overview,top_text,problem_statement,bottom_text,pageError,works} = props
    const router = useRouter()
    const {slug} = router.query
    const [loading,setLoading] = useState<boolean>(false)
 

  

    useEffect( ()=>{
    


if(slug !== undefined){
    setLoading(false)
}else{
    setLoading(true)
    
}

if(pageError){
    return router.push('/404')
}

}, [slug,pageError,router])


    return (
    <>
{loading?
<>
<PageLoading/>
</>:

<>

{works ?
    <Body>
            <HeadTags title={title}/>

            <Wrapper>

                <MainTitle>{title}</MainTitle>
                <MainImage width={956} height={640} src={featured_image} alt={``}/>

                <Topsection className=' w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 my-10'>

                    <Role>
                        <h1>Role</h1>
                        <p>{role}</p>
                    </Role>
                    
                    <Role>
                        <h1>Length</h1>
                        <p>{length}</p>
                    </Role>
                    
                    <Role>
                        <h1>Tools used</h1>
                        <p>{software}</p>
                    </Role>
                    
                    <Role>
                        <h1>Outcome</h1>
                        <p>{outcome}</p>
                    </Role>
                </Topsection>

                <Overview>
                    <h1>Overview</h1>
                    <p>{overview}</p>
<div dangerouslySetInnerHTML={{__html: top_text}}/>



                </Overview>
                <Overview>
                    <h1>Problem Statement</h1>
                    <p>{problem_statement}</p>
                    <div dangerouslySetInnerHTML={{__html: bottom_text}}/>

                </Overview>


            </Wrapper>
            
        </Body>:

<PageLoading/>


}

</>
}
    </>

    )
}

const Body = styled.div`
  color: #fff ;
`
const MainTitle = styled(projectTitle)`
text-align: center;
margin:24px 0;

`
const MainImage = styled(Image)`
margin:16px 0 40px 0;
`
const Topsection = styled.div``
const Role = styled.div`
margin: 16px 0;

h1{
font-family:"DM Serif Display";
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 1.3;
text-align: left;

}
p{
    font-family: "GGX88";
font-size: 20px;
font-style: normal;
font-weight: 300;
line-height: 1.6;
text-align: left;
margin: 8px 0;

}
`
      
const Overview = styled.div`
margin: 16px 0;

h1{

    font-family: "DM Serif Display";
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: 1.4;
letter-spacing: 0em;
text-align: left;
margin: 16px 0;

}

h2{

    font-family: "DM Serif Display";
font-size: 28px;
font-style: normal;
margin: 16px 0;
font-weight: 400;
line-height: 1.6;
letter-spacing: 0em;
text-align: left;

}

h3{
    font-family: "DM Serif Display";
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 33px;
margin: 16px 0;
letter-spacing: 0em;
text-align: left;

}
p{
    font-family: "GGX88";
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: 1.6;
letter-spacing: 0em;
margin: 16px 0;
text-align: left;

}

img{
    min-height: 300px;

max-width: 959px;
margin: 16px 0;
width:100%;

}

a{
    transition: 0.3s ease-in;
    :hover{
        color: #F5AD00;
    }
}
`

export const getServerSideProps = async (context:any) => {
    const {params} =context
    const {slug} =params

    try {
        const res = await axios.get(workDetailUrl(slug))
        const works = res.data
        // console.log(works)
        return {
            props:{
                works:works,
                title:works.title,
                featured_image:works.featured_image,
                length: works.length,
                software:works.software,
                role:works.role,
                outcome:works.outcome,
                overview:works.overview,
                top_text:works.top_text,
                problem_statement:works.problem_statement,
                bottom_text:works.bottom_text,
             
            }
          }
    } catch (error) {
        return{
            props:{
                pageError:true
            }
        }
    }
 
    
   
  }
export default WorkDetails
