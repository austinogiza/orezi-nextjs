import type { NextPage } from "next"
import styled from "styled-components"
import ImageWrapper from "@/components/ImageWrapper"
import { bodyText, smallTitle } from "@/styles/TextStyles"
import Link from "next/link"


interface WorkProps{
    src:any,
    link:string,
    title:string, 
    text:string,
   

}

const WorkCard:NextPage<WorkProps>  = props => {

    const {link,title,text,src}=props

    return (
        <Body className=" mt-10 2xl:mt-16 xl:mt-16 lg:mt-16 gap-8 2xl:gap-12 xl:gap-12 lg:gap-12 w-full h-full grid grid-cols-1  2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 justify-center items-center">
            <Cover>
<ImageWrapperCover alt={title} width={406} height={450} src={src}/>
            </Cover>
            <Cover className=" max-w-lg w-full text-white">
                <Title className=" max-w-lg w-full text-white">{title}</Title>
                <Text className=' mt-4 mb-10'>{text}</Text>
<LinkRef href={link}> 
<a className="orezi-clr-btn mt-10" >
VIEW CASE STUDY
</a>
</LinkRef>
                </Cover>
            
        </Body>
    )
}

const Body = styled.div`
height: 100%;
width: 100%;
min-height: 450px;
position: relative;
`
const Cover = styled.div``
const ImageWrapperCover = styled(ImageWrapper)`
max-width: 406px;
max-height: 450px;
height:100%;
width:100%;
`
const LinkRef = styled(Link)``
const Title = styled(smallTitle)`

`
const Text = styled(bodyText)``
export default WorkCard
