import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { SiGithub } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";



const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial link='#' Icon={CiLinkedin}/>
        <SingleContactSocial link='#' Icon={SiGithub}/>
        <SingleContactSocial link='#' Icon={ FaInstagram}/>
    </div>
  );
}

export default ContactSocial