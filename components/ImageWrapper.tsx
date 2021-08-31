import { NextPage } from "next"
import Image from 'next/image'
import styled from "styled-components"



interface ImageProps{
    src: any,
    alt: string,
    width: number
height: number
   
}

const ImageWrapper:NextPage<ImageProps> =props => {

    const {src,alt,width,height}= props;
    return (
        <Body priority width={width} height={height} src={src} alt={alt} layout="responsive"/>  
            
    )
}

const Body = styled(Image)`

`

export default ImageWrapper
