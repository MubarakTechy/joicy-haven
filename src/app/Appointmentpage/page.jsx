"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Footer from '@/Components/Footer';

const page = () => {
    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [WhatsApp, setWhatsApp] = useState()
    const [Location, setLocation] = useState()
    const [serviceType, setServiceType] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [message, setMessage] = useState()
    const [sending, setSending] = useState()

        async function fetchApi(e) {
            e.preventDefault()
            setSending(true)
            try {
                const baseurl ="https://forms-io.onrender.com/submit-form/225928e2-7d59-4c54-9f7c-f434516c3436"
                const response = await fetch(baseurl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                            name: fullName,
                            email: email,
                            whatsapp: WhatsApp,
                            location: Location,
                            services_type: serviceType,
                            date: date,
                            time: time,
                            message: message
                    })
                    .then((res)=>(res.json)),
                       if (response) {
                         setSending(false)
                         alert('message sent successfully!')
                         
                       }
                });
            } catch (error) {
                console.log(error)
            }
        }
  return (
    <form onSubmit={fetchApi} className='w-[100%]  flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center m-[35px] gap-[15px]'>
            <Image src="/logo.png" alt="" width={100} height={100} />
            <h2 className=' md:text-[30px] text-[20px] font-bold text-[#2f3093]'>Book Appointment With Us</h2>
        </div>
        <div className='flex flex-col gap-[20px]'>
            <div className='flex flex-col md:flex-row md:gap-[50px] gap-[15px] items-center'>
                <div className='flex flex-col gap-[5px]'>
                    <h2 className='font-bold'>FULL NAME</h2>
                    <input onChange={(e)=>setFullName(e.target.value)} className='border-2 border-black md:w-[40vw] w-[95vw] py-[7px] rounded-md px-[10px]' value={fullName} required type="text" name='full name' placeholder='Your Name' />
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <h2 className='font-bold'>EMAIL</h2>
                    <input onChange={(e)=>setEmail(e.target.value)} className='border-2 border-black md:w-[40vw] w-[95vw] py-[7px] rounded-md px-[10px]' value={email} required type="text" name='email' placeholder='Your Email' />
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:gap-[50px] gap-[15px] items-center'>
                <div className='flex flex-col gap-[5px]'>
                    <h2 className='font-bold'>WhatsApp Number</h2>
                    <input onChange={(e)=>setWhatsApp(e.target.value)} className='border-2 border-black md:w-[40vw] w-[95vw] py-[7px] rounded-md px-[10px]' value={serviceType} required type="text" name='whatsapp number' placeholder='Your WhatsApp No' />
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <h2 className='font-bold'>Service Type</h2>
                    <input onChange={(e)=>setServiceType(e.target.value)} className='border-2 border-black md:w-[40vw] w-[95vw] py-[7px] rounded-md px-[10px]' value={serviceType} required type="text" name='service type' placeholder='Select Service' />
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:gap-[50px] gap-[15px] items-center'>
                <div className='flex flex-col gap-[5px]'>
                    <h2 className='font-bold'>Location</h2>
                    <input onChange={(e)=>setLocation(e.target.value)} className='border-2 border-black md:w-[40vw] w-[95vw] py-[7px] rounded-md px-[10px]' value={Location} required type="text" name='location' placeholder='Your Location' />
                </div>
                <div className='flex flex-col md:flex-row md:gap-[50px] items-center'>
                    <div className='flex flex-col gap-[5px]'>
                        <h2 className='font-bold'>Appointment Date</h2>
                        <input onChange={(e)=>setDate(e.target.value)} className='border-2 border-black md:w-[20vw] w-[95vw] py-[7px] rounded-md px-[10px]' value={date} required type="date" name='date' placeholder='Your City' />
                    </div>
                    <div className='flex flex-col gap-[5px]'>
                        <h2 className='font-bold'>Time</h2>
                        <input onChange={(e)=>setTime(e.target.value)} className='border-2 border-black md:w-[16vw] w-[95vw] py-[7px] rounded-md px-[10px]' value={time} required type="time" name="time" id="" />
                    </div>
                </div>
                </div>
            <div className='flex flex-col gap-[5px]'>
                <h2 className='font-bold'>Message</h2>
                <textarea onChange={(e)=>setMessage(e.target.value)} className='md:w-[84vw] w-[95vw] h-[20vh] rounded-lg border-2 border-black px-[10px]' name="message" value={message} required  placeholder='Message'></textarea>
            </div>
        </div>
        <div className='m-[30px]'>
            <button className='md:w-[15vw] w-[80vw] py-[10px] bg-black text-white rounded-md'>{sending ? "Sending" : "Send"} </button>
        </div>
      <Footer/>
    </form>
  )
}

export default page

