import ContactForm from "@/components/contact/ContactForm"
import ContactHero from "@/components/contact/ContactHero"
import HeadTags from "@/container/HeadTags"
import type { NextPage } from "next"


const contact:NextPage = () => {
    return (
        <div>
               <HeadTags title="Contact Me - The Creative Mena "/>
               <ContactHero/>
               <ContactForm/>
        </div>
    )
}

export default contact
