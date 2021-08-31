import AboutFeatured from "@/components/about/AboutFeatured"
import AboutHero from "@/components/about/AboutHero"
import HeadTags from "@/container/HeadTags"
import type { NextPage } from "next"
import styled from "styled-components"
import Message from "@/components/Message"
const about:NextPage = () => {
    return (
        <Body>
            <HeadTags title="About Me - The Creative Mena"/>
            <AboutHero/>
            <AboutFeatured/>
            <Message/>
        </Body>
    )
}


const Body = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`
export default about
