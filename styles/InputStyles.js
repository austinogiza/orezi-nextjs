import styled from 'styled-components'
import {OreziTheme} from '@/styles/Color'


export const mainInput = styled.input`
height: 52px;
max-width: 316px;
width: 100%;
border-radius: 16px;
padding: 16px 16px 16px 24px;
border: 1px solid #565656;
transition: 0.3s ease-in;
outline: none;
background: transparent;
margin: 8px 0;
color: #fff;
::placeholder{
font-family: "GGX88";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 17px;
letter-spacing: 0em;
text-align: left;


color: #565656;

}
:focus{
    border: 1px solid  ${OreziTheme.primary};
    outline: none;
}

:hover{
    border: 1px solid  ${OreziTheme.primary};
    outline: none;
}
:active{
    border: 1px solid  ${OreziTheme.primary};
    outline: none;
}
`

export const messageInput = styled.textarea`
height: 212px;
max-width: 684px;
width: 100%;
resize: none;
background: transparent;
border-radius: 16px;
padding: 32px 16px 16px 24px;
border: 1px solid #565656;
outline: none;
color: #fff;
transition: 0.3s ease-in;
margin: 8px 0;
:focus{
    border: 1px solid  ${OreziTheme.primary};
    outline: none;
}

:hover{
    border: 1px solid  ${OreziTheme.primary};

    outline: none;}

:active{
    border: 1px solid  ${OreziTheme.primary};
    outline: none;
}
`

