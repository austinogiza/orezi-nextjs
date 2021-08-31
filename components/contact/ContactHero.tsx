
import styled from "styled-components"
import {Wrapper} from '@/container/Container'
import {bodyText, largeTitle,bodyTitle} from '@/styles/TextStyles'
import type { NextPage } from "next"


const ContactHero:NextPage = props => {
    return (
        <Body className=' w-full h-full mt-10 mb-10'>
            <Wrapper className=' h-full  justify-center '>
                <Cover className=' flex flex-col max-w-3xl justify-start'>
<Title className=' text-white'>Let's build something amazing together.</Title>
<Text className=' text-white mt-2'>I'm always open to chat with other designers, developers, or product people. Be it about an upcoming project or just to say hi, feel free to drop me a line below.
And if forms aren't your thing, you can always <span className='orezi-clr italic focus:text-opacity-70 hover:text-opacity-70'><a href="mailto:contact@thecreativemena.com">email me directly</a></span> instead.</Text>

<SmallTitle className=" mt-10 xl:mt-16 2xl:mt-16 lg:mt-16 mb-10 xl:mb-16 2xl:mb-16 lg:mb-16  text-white">Get in touch with me</SmallTitle>

                </Cover>



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

const SmallTitle = styled(bodyTitle)`

`

const Title = styled(largeTitle)`

`

const Text = styled(bodyText)``

export default ContactHero
