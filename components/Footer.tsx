import type { NextPage } from "next"
import styled from "styled-components"
import {Wrapper} from '@/container/Container'
import {tinyText,footerText} from '@/styles/TextStyles'
import logo from '@/assets/logo.svg'
import Image from 'next/image'
import { OreziTheme} from "@/styles/Color"

import Link from 'next/link'
import {AiOutlineTwitter,AiOutlineMedium,AiOutlineDribbble,AiOutlineBehance} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer:NextPage = () => {
    return (
        <Body className=' w-full mt-5 2xl:mt-10 xl:mt-10 lg:mt-10 '>
            <Wrapper className="w-full grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 items-center justify-center gap-6 text-center 2xl:text-left xl:text-left lg:text-left">
<Cover>
 <Link href="/" passHref>
 <ImageWrapperCover src={logo} height={40} width={90} alt="The creative mena logo"/>
 </Link>
</Cover>
<Cover>
<FooterSmallTitle>Follow Me</FooterSmallTitle>
<Cover className=" mt-4 gap-4 text-center justify-center items-center w-full self-center place-items-center grid grid-cols-3 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-6"> 

<LinkRef href="https://twitter.com/thecreativemena?lang=en" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter/></LinkRef>
<LinkRef href="https://thecreativemena.medium.com/" target="_blank" rel="noopener noreferrer"><AiOutlineMedium/></LinkRef>
<LinkRef href="http://linkedin.com/in/thecreativemena" target="_blank" rel="noopener noreferrer"><FaLinkedinIn/></LinkRef>
<LinkRef href="https://www.behance.net/thecreativemena" target="_blank" rel="noopener noreferrer"><AiOutlineBehance/></LinkRef>
<LinkRef href="https://www.instagram.com/thecreativemena/" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter/></LinkRef>
<LinkRef href="https://dribbble.com/thecreativemena" target="_blank" rel="noopener noreferrer"><AiOutlineDribbble/></LinkRef>
</Cover>
</Cover>
<Cover className=" flex flex-col justify-start">
    <FooterSmallTitle>Want to say Hi?</FooterSmallTitle>
    <SmallTitle className=" mt-4"><a href="mailto:thecreativemena@gmail.com">thecreativemena@gmail.com</a></SmallTitle>

</Cover>

            </Wrapper>
            
        </Body>
    )
}

const Body = styled.footer`
height: 100%;
width: 100%;
min-height: 150px;
`
const Cover = styled.div`
.logo_img{

    width: 100px;
height: 40px;
}
a{
    cursor: pointer ;
}
`

const ImageWrapperCover = styled(Image)`
cursor: pointer;
width: 90px;
height: 40px;

`

const SmallTitle = styled(tinyText)`
   color: #fff;
a{
    color: #fff;
    transition: 0.3s ease-in;

    :hover{
        color: ${OreziTheme.primary};
    }


}
`

const FooterSmallTitle  = styled(footerText)`
color: #565656;
font-weight: 500;

`
const LinkRef = styled.a`
height: 24px;
width: 24px;
background: #FFFFFF;
transition: 0.3s ease-in;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
:hover{
    background: ${OreziTheme.primary};
}
`

export default Footer
