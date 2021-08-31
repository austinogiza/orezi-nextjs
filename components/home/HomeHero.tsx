
import styled from "styled-components"
import {Wrapper} from '@/container/Container'
import ImageWrapper from "@/components/ImageWrapper"
import {bodyText, bodyTitle} from '@/styles/TextStyles'
import {bodyButton} from '@/styles/Buttons'
import { OreziTheme } from "@/styles/Color"



const HomeHero = () => {
    return (
        <Body className=' w-full h-full mt-10 mb-10'>
            <Wrapper className=' h-full grid gap-7 2xl:gap-12 xl:gap-12 lg:gap-12 grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 justify-center  items-center'>
                <Cover className=' flex flex-col justify-start'>
<Title className=' text-white'>Hi, I’m Orezi Mena</Title>
<Text className=' text-white mt-2'>Got a brand, business, or product to design? Let's start the journey together. If you have started the process, let's finish what you started. That idea, business, brand, product, would stand out with proper branding. I help you bring that idea, business, brand, or product to life.</Text>
<Cover className=' mt-8'>
<ResumeButton target="_blank" rel="noopener noreferrer" href="http" download>View Resume</ResumeButton>

</Cover>
                </Cover>

                <OreziCover >
                    <ImageWrapperCover  height={415} width={350} src="https://res.cloudinary.com/dimrd8ott/image/upload/v1628594778/IMG_0093_eyyrdq.jpg" alt="The creative mena"/>
                    <Oreziyellow/>


                </OreziCover>



            </Wrapper>
            
        </Body>
    )
}


const Body = styled.div`
height: 100%;
width: 100%;
min-height: 500px;
`
const Cover = styled.div``

const OreziCover = styled.div`
width: 100%;
position: relative;
min-height: 435px;
max-width: 380px;
z-index: 1;


::before{
    position: absolute;
    content:"";
    background: ${OreziTheme.primary};
    height: 375px;
width: 243px;
left: -20px;
top: 89px;
z-index: -1;

}
`

const Oreziyellow = styled.div``

const ImageWrapperCover = styled(ImageWrapper)`
height: 100%;
width: 100%;
max-width: 350px;
max-height: 415px;
position: relative;
/* z-index: 3; */

`

const Title = styled(bodyTitle)`

`
const Text = styled(bodyText)``
const ResumeButton = styled(bodyButton)``
export default HomeHero
