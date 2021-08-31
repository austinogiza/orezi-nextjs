import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/container/Layout'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import {UseProgress} from '@/components/UseProgress'
import {Progress} from '@/components/Progress'


function MyApp({ Component, pageProps }: AppProps) {
  const setIsAnimating = UseProgress((state) => state.setIsAnimating);
  const isAnimating = UseProgress((state)=> state.isAnimating)
const router  = useRouter()
  useEffect(()=>{
const handleStart =()=>{
  setIsAnimating(true)
}

const handleStop =()=>{
  setIsAnimating(false)
}

router.events.on("routeChangeStart", handleStart)
router.events.on("routeChangeComplete", handleStop)
router.events.on("routeChangeError", handleStop)

return ()=>{
  
router.events.off("routeChangeStart", handleStart)
router.events.off("routeChangeComplete", handleStop)
router.events.off("routeChangeError", handleStop)

}
  },[router, setIsAnimating])
  return (

    <>
<Layout>
<Progress isAnimating={isAnimating}/>
<Component {...pageProps} />
</Layout>
    </>
  )
}
export default MyApp
