import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser";
import { Toaster, toast } from 'sonner'
//icons
import {BsArrowRight} from 'react-icons/bs';
//framer motion
import { motion} from  'framer-motion';
import { fadeIn } from '../variants';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (params) => {
  const toastId = toast.loading("Sending your message, please wait..")
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        params,

        {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate: {
          throttle: 5000, // you cannot send more than 1 email per 5 seconds using this API
        }
      })
      .then(
        () => {
         toast.success("Thank you for getting in touch. I will get back to you soon.", {
          id: toastId
         })
        },
        (error) => {
          //console.log('FAILED...', error.text);
          toast.error("There was an error sending your message, please try again!", {
            id: toastId
          })
        },
      );
  };

  const onSubmit = data =>{
    const templateParams= {
      to_name:"Codebucks",
      from_name:data.Name,
      reply_to:data.Email,
      message:data.Message
    }
    sendEmail(templateParams)
  }

  return (
 
   <>
    <Toaster richColors={true} />
    <motion.form 
    onSubmit={handleSubmit(onSubmit)} 
    variants={fadeIn('right', 0.2)}
    initial='hidden'
    animate='show'
    exit='hidden'
    className='flex-1 flex flex-col gap-6 w-full mx-auto'>
       
      <input type="text" placeholder="Name" {...register("Name", {required: 'Name is required',
        minLength:{
          value: 3,
          message: "Name should be atleast 3 characters long"
        }
      })} 

      className='w-full p-3 rounded-md custom-bg text-pink-800'/>
      {
        errors.Name && <span className='inline-block self-start text-accent'>{errors.Name.message}</span>
      }

      {/*EMAIL*/}
     
      <input type="Email" placeholder="Email" {...register("Email", {required: 'Email is required'})}  
      
      className='w-full p-3 rounded-md custom-bg  text-pink-800'/>
      
      {
        errors.Email && <span className='inline-block self-start text-accent'>{errors.Email.message}</span>
      }
      {/*MESSAGE*/}
      <textarea placeholder='Message'{...register("Message", {required: 'Message is required', 
      maxLength:
      {
        value: 500,
        message: "Message should be less than 500 characters"},
        minLength:{
          value:50,
          message:"Message should be more than 50 characters"}
        })} 
          className='w-full p-3 rounded-md custom-bg text-pink-800'/>
      
      {
        errors.Message && <span className='inline-block self-start text-accent'>{errors.Message.message}</span>
      }
      

      {/*BUTTON*/}
      <button className='btn rounded-full border border-white/50 max-w-[170px]
      px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
        <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Send</span>
      <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
      group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
      </button>
    </motion.form>
   </>
   
  )
}