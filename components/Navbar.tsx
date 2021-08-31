import { Wrapper } from "@/container/Container"
import styled from "styled-components"
import logo from '@/assets/logo.svg'
import Image from "next/image"
import Link from "next/link"
import { useState, FunctionComponent, useEffect, HtmlHTMLAttributes  } from "react"
import { useRouter } from 'next/router'
import { OreziTheme } from "@/styles/Color"



interface NavbarProps{
    toggle?: boolean | any
}

const Navbar:FunctionComponent<NavbarProps> = props => {
  const {toggle} = props

    const location = useRouter()

  

    useEffect(()=>{

    }, [location])

    const [menu, setMenu]=useState<boolean | null>(false)
    const toggleMenu =()=>{
        setMenu(!menu)
    }
    
    return (
        <Body>
            <Wrapper>
<NavCover>

    <LeftSide>
        <Logohref href='/' passHref>
        <Logo src={logo} width={95} height={35} alt="The Creative Mena Logo"/>
        </Logohref>
    </LeftSide>

    <RightSide toggle={menu}>
        <NavUl>
            <NavLi><Link href='/work' passHref>Work</Link></NavLi>
            <NavLi><Link href='/about' passHref>About</Link></NavLi>
            <NavLi><Link href='/contact' passHref>Contact</Link></NavLi>

            
        </NavUl>
    </RightSide>

    <MobileToggle onClick={toggleMenu} >
        <MobTop toggle={menu} />
        <MbCent toggle={menu}/>
        <MobBottom toggle={menu}/>
    </MobileToggle>
</NavCover>

            </Wrapper>
            
        </Body>
    )
}

const Body = styled.header`
height: 50px;
width: 100%;
margin: 32px 0;

position: relative;

`
const NavCover = styled.nav`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const LeftSide = styled.div`
width: 100%;
display: flex;
flex-direction: row;
/* 
max-width:100px; */


`
const Logo = styled(Image)`
width:100%;
max-width: 95px;
height:40px;
cursor: pointer;
`

const Logohref = styled(Link)`
width: 100%;
height:100%;
`
const RightSide = styled.div<NavbarProps>`
/* max-width: 343px; */
/* width: 100%; */
display: flex;
flex-direction: row;


@media only screen and (max-width:550px){
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
max-width: 700px;
justify-content: center;
align-items: center;
width: 100%;
height: 300px;
transition: 0.3s ease-in;
background: ${OreziTheme.secondary};
 flex-direction: column;
 text-align: center;
 transform: ${props=> props.toggle? "translateY(0%)": "translateY(-600px)"};
}
`
const NavUl = styled.div`
display: flex;
flex-direction: row;
@media only screen and (max-width:550px){

flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;

}

`
const NavLi = styled.div`
margin:  0 0 0 60px;

a{

    color: #fff;
    font-family: "GGX88";
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
transition:0.3s ease-in;

:hover{
    color: #F5AD00;

}


}

@media only screen and (max-width:550px){

    margin: 16px 0 ;
}
`
const MobileToggle = styled.div`
cursor: pointer;
transition: 0.3s ease-in;
display: none;
width: 44px;
height: 50px;
position: fixed;
top: 24px;
right: 24px;
z-index: 10;
transition: all 0.5s ease-in;
@media only screen and (max-width:550px){

display: flex;
flex-direction: column;
}

`
const MobTop = styled.div<NavbarProps>`
height:3px;
width: 100%;
background: #fff;
margin: 2px 0;
transition: 0.3s ease-in;

transform: ${props=>props.toggle? "rotate(-45deg) translate(-3px,2px)":"rotate(0)"};
`
const MbCent = styled.div<NavbarProps>`
height:3px;
width: 100%;
background: #fff;
margin: 2px 0;
transition: 0.3s ease-in;
display: ${props=>props.toggle? "none":"flex"};
`
const MobBottom = styled.div<NavbarProps>`
height:3px;
width: 100%;
background: #fff;
margin: 2px 0;
transition: 0.3s ease-in;
transform: ${props=>props.toggle? "rotate(45deg) translate(-4px,-3px)":"rotate(0)"};
`
export default Navbar
