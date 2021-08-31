import styled from "styled-components"
import {Wrapper} from '@/container/Container'
import { bodyText, smallTitle } from "@/styles/TextStyles"

const AboutFeatured = () => {

    const text = [
        {title:"Featured In",
    first:  "UXBootcamp",
    sec:"Tribune",
      third:"Republican"},

      {title:"Other Area Of Expertise",
    first:  "Corporate Design",
    sec:"Motion Graphics",
      third:   "Brand Identity Design"},

      {title:"My Playlist?",
    first:"Spotify"},
    ]
    return (
        <Body className=' w-full h-full mt-10 mb-10 2xl:mt-20  xl:mt-20 lg:mt-20 2xl:mb-20  xl:mb-20 lg:mb-20'>
            <Wrapper className=' h-full grid gap-7 2xl:gap-24 xl:gap-24 lg:gap-24 grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 justify-start '>
{text.map((text,index)=>
    <Cover className=' text-white' key={index}>
<Title className=' text-white'>{text.title}</Title>
<div className=' mt-4 2xl:mt-8 xl:mt-8 lg:mt-8'>

{text.first && <Text className=' mt-2 mb-2 text-white'>
        {text.first}
    </Text> }
    {text.sec && <Text className=' mt-2 mb-2 text-white'>
        {text.sec}
    </Text> }
    {text.third && <Text className=' mt-2 mb-2 text-white'>
        {text.third}
    </Text> }

</div>
                </Cover>
)}


            </Wrapper>
            
        </Body>
    )
}

const Body = styled.div`
height: 100%;
width: 100%;
min-height: 200px;
`
const Cover = styled.div``
const Title = styled(smallTitle)`
white-space: nowrap;
`
const Text = styled(bodyText)``
export default AboutFeatured
