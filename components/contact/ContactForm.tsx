import { Wrapper } from "@/container/Container"
import styled from "styled-components"
import {submitButton, mainButton} from '@/styles/Buttons'
import{mainInput, messageInput} from "@/styles/InputStyles"
import React, { useState, FunctionComponent, FormEvent } from "react"
import {bodyText, largeTitle,bodyTitle} from '@/styles/TextStyles'
import Loader from '@/components/Loader'
import axios from "axios"
import {contactUrl} from '@/api/constants'



const ContactForm:FunctionComponent =() => {

    const initial={

        email:"",
        name:"",
        message:""
    }
    const [loading, setLoading] = useState<boolean>(false);
    const [sent, setSent] = useState<boolean>(false);
    const [form, setForm] = useState(initial);
    const [name, setName]=useState<string>("")
    const [email, setEmail]=useState<string>("")
    const [message, setMessage]=useState<string>("")


    const onSubmit = async(e:FormEvent)=>{
        e.preventDefault()
        setLoading(true)
        axios.post(contactUrl, {name,email,message})
        .then(res=>{
            setSent(true)
            setLoading(false)
        })
        .catch(err=>{
            setSent(false)
            setLoading(false)
        })

    }

    const handleChange = (e:FormEvent<HTMLInputElement>)=>{
        const {name,value}:{name:string; value:string}=e.target
        setForm({...form, [name]:value})

    }
    return (
        <Body>
        <Wrapper>{
            sent ?

            <>
            <FormSent>
                <Formtitle> Thank you for your mail🎉.</Formtitle>
                <Formtext>I will be in touch.👋</Formtext>
<HomeButton  href='/'><a className="orezi-btn">Head home</a></HomeButton>
            </FormSent>

            </>:

            <>
<Form className=' max-w-2xl' onSubmit={onSubmit}>

<Row className='grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-6'>
<Column>
<Label htmlFor='name'>Name</Label>
<FormInput id='name' required name="name" value={name} onChange={e=>setName(e.target.value)}  placeholder="Your Name" type="text" />
</Column>
<Column>
<Label  htmlFor='email'>Email</Label>
<FormInput id='email' required name="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your Email Address" type="email" />
</Column>

            </Row>
            <Row>
            <Column> 
            <Label htmlFor='message'>Message</Label>
<FormMessage required name="message" value={message} onChange={e=>setMessage(e.target.value)} id='message'  placeholder="Hi Mena....."/>

</Column>
            </Row>
            <Row>
<Submitbuttonhere>{loading ? <Loader/>: "Send"}</Submitbuttonhere>

            </Row>
            

</Form>
            </>
            }

        </Wrapper>
        </Body>
    )
}


const Body = styled.div`
min-height: 470px;
width:100%;

margin:  40px 0;


`
const Form = styled.form`
display: flex;
flex-direction: column;
width:100%;
`

const Row = styled.div`
width:100%;
margin: 26px 0;


`
const Column = styled.div`
width:100%;
display: flex;
flex-direction: column;

`
const Label = styled.label`
width:100%;
font-family: "GGX88";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.2;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;

`

const FormInput = styled(mainInput)`
width:100%;

`

const Formtitle = styled(bodyTitle)`
color: #fff;
`
const Formtext = styled(bodyText)`
color: #fff;
margin: 24px 0 40px 0;
`
const FormMessage = styled(messageInput)`
width:100%;

`
const FormSent = styled.div`
width: 100%;
display:flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
`

const HomeButton = styled(mainButton)`

`
const Submitbuttonhere = styled(submitButton)``
export default ContactForm
