import type { NextPage } from 'next'
import Head from 'next/head'
interface HeadProps {
    title:string
}
const HeadTags:NextPage<HeadProps> = props => {
    const {title} =props
    return (
        <>
        <Head>
            <title>{title}</title>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
            
        </>
    )
}

export default HeadTags
