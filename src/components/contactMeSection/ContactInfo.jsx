import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <SingleInfo text="nm3391765@gmail.com" Image={ MdEmail}/>
        <SingleInfo text="9930838096" Image={FaPhoneAlt}/>
        <SingleInfo text="Mumbai" Image={IoLocation}/>
    </div>
  )
}

export default ContactInfo;