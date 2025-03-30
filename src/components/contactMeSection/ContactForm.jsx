import React from 'react'



const ContactForm = () => {
    
 return (
    <div>
        <form className='flex flex-col gap-4 text-white'  >
            <input name="from_name"type="text" placeholder='Your Name' required className='h-12 rounded-lg bg-lightBrown px-2'/>
            <input name="from_email" type="email" placeholder='Your Email' required className='h-12 rounded-lg bg-lightBrown px-2'/>
            <textarea name="message" type="text" placeholder='Message' rows="9" cols="50" required className='rounded-lg bg-lightBrown px-2'/>
            <button type="submit" className='w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500'>Send</button>
        </form>
        

    </div>
  )
}

export default ContactForm;