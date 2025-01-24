"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import Footer from '@/Components/Footer';

const page = () => {
        const [fullName, setFullName] = useState()
        const [email, setEmail] = useState()
        const [WhatsApp, setWhatsApp] = useState()
        const [Location, setLocation] = useState()
        const [training, setTrai] = useState()
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
            <h2 className='md:text-[30px] text-[27px] font-bold text-[#2f3093]'>Enroll For Our Training</h2>
        </div>
        <div className='flex flex-col gap-[20px]'>
            <div className='flex flex-col md:flex-row md:gap-[50px] gap-[15px] items-center'>
                <div className='flex flex-col gap-[5px]'>
                    <h2 className='font-bold'>FULL NAME</h2>
                    <input onChange={(e)=>setFullName(e.target.value)} className='border-2 border-black md:w-[40vw] w-[95vw] py-[7px] rounded-md px-[10px]' type="text" name='' placeholder='Your Name' />
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <h2 className='font-bold'>EMAIL</h2>
                    <input onChange={(e)=>setEmail(e.target.value)} className='border-2 border-black md:w-[40vw] w-[95vw] py-[7px] rounded-md px-[10px]' type="text" name='' placeholder='Your Email' />
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:gap-[50px] gap-[15px] items-center'>
                <div className='flex flex-col gap-[5px]'>
                    <h2 className='font-bold'>WhatsApp Number</h2>
                    <input onChange={(e)=>setWhatsApp(e.target.value)} className='border-2 border-black md:w-[40vw] w-[95vw] py-[7px] rounded-md px-[10px]' type="text" name='' placeholder='Your WhatsApp No' />
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <h2 className='font-bold'>Training Type</h2>
                    <input onChange={(e)=>sett(e.target.value)} className='border-2 border-black md:w-[40vw] w-[95vw] py-[7px] rounded-md px-[10px]' type="text" name='' placeholder='Select Trainig Type' />
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:gap-[50px] gap-[15px] items-center'>
                <div className='flex flex-col gap-[5px]'>
                    <h2 className='font-bold'>State</h2>
                    <input className='border-2 border-black md:w-[40vw] w-[95vw] py-[7px] rounded-md px-[10px]'type="text" name='' placeholder='Your State' />
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <h2 className='font-bold'>Your City</h2>
                    <input className='border-2 border-black md:w-[40vw] w-[95vw] py-[7px] rounded-md px-[10px]' type="text" name='' placeholder='Your City' />
                </div>
            </div>
            <div className='flex flex-col gap-[5px]'>
                <h2 className='font-bold'>Message</h2>
                <textarea className='md:w-[84vw] w-[95vw] h-[20vh] rounded-lg border-2 border-black ' name="" id="" placeholder='Message'></textarea>
            </div>
        </div>
        <div className='m-[30px]'>
            <button className='md:w-[15vw] w-[80vw] py-[10px] bg-black text-white rounded-md'>Enrol Now</button>
        </div>
      <Footer/>
    </form>
  )
}

export default page
