import Link from 'next/link';
import styled from "styled-components";
import {OreziTheme} from '@/styles/Color'

export const mainButton = styled(Link)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

max-width: 195px;
height: 54px;
width: 100%;
color: #fff;
border: 1px solid #FFFFFF !important;
box-sizing: border-box;
border-radius: 29px;
cursor: pointer;
font-family: "GGX88";
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 1.2;
a {

    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

max-width: 195px;
height: 54px;
width: 100%;
color: #fff;
border: 1px solid #FFFFFF !important;
box-sizing: border-box;
border-radius: 29px;
cursor: pointer;
font-family: "GGX88";
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 1.2;
}
`

export const submitButton = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 16px;
max-width: 161px;
height: 64px;
width: 100%;
color: #1F1E1D;
background: ${OreziTheme.primary};
box-sizing: border-box;
border-radius: 16px;
cursor: pointer;
font-family: "GGX88";
font-size: 18px;
transition: 0.3s ease-in;
font-style: normal;
font-weight: 700;
line-height: 1.2;

:hover{
    color: #1F1E1D;
    background: #fff;
}

`

export const bodyButton = styled.a`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 16px;
max-width: 195px;
height: 54px;
width: 100%;
color: #fff;
border: 1px solid #FFFFFF;
box-sizing: border-box;
border-radius: 29px;
cursor: pointer;
font-family: "GGX88";
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 1.2;
position: relative;
transform-origin: left;
transition: 0.3s ease-in;
    -webkit-transition: 0.3s ease-in;
    -moz-transition: 0.3s ease-in;
    -ms-transition: 0.3s ease-in;
    -o-transition: 0.3s ease-in;

:hover{
    background: #fff;
    color: #1F1E1D;

}
`