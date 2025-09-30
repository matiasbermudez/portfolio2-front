'use client'
import axios from 'axios';
import Image from 'next/image'
import {  useState } from 'react';

export default function  LoginPage () {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  const handleSubmit = async (e : React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/login"
, {
        email,
        password
      }, {
        withCredentials: true 
      });
      console.log("Login successful:", res);
  }
    catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:3000/api/profile", {
        withCredentials: true 
      });
      console.log("Profile data:", res.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };
  return (
    <div className='flex-col-center h-screen'>
    
      <div className='flex-col-center h-[100%] w-[100%] max-w-[768px] bg-[#171619]  sm:h-[80%] sm:w-[80%] sm:border sm:rounded-2xl  ' >
        <div className=' flex flex-col sm:flex-row items-center justify-center pb-10 sm:pb-20  gap-5 sm:gap-10 opacity-80 '>
          <Image
            src='/logo.webp'
            alt="Logo"
            width={400}
            height={400}
            className='w-[150px] h-[100px] lg:w-[200px] lg:h-[150px] object-contain'
          />
          <h1 className='text-[#B3853A] font-cormorant-garamond text-[3rem] sm:text-[3rem] lg:text-[4rem] font-bold text-shadow-lg/30'>LOGIN</h1>
        </div>
        
        <form className='flex-col-center w-[100%] gap-5 text-[1.3rem]'  onSubmit={handleSubmit}>
          
            <input 
            type="text" 
            id="email" name="email" 
            placeholder='Email' 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='login-input' 
            />

            <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder='Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            className='login-input' 
            />
          
          <button type="submit" className='login-buton font-bold  bg-[#83311E]'>Sing in</button>
        </form>
        <div className='flex-col-center gap-2 mt-5'>
          <p className='text-[#B3853A] font-cormorant-garamond text-[1.2rem]'> No tienes cuenta ?</p>
          <a href="/register" className='text-[#B3853A] font-cormorant-garamond text-[1.2rem] hover:underline'>Registrate</a>
          </div>
      </div>
      <div>
        <form onSubmit={handleProfileSubmit} className='flex-col-center gap-5 text-[1.3rem] mt-10'>
          <button type='submit' className='login-buton font-bold bg-amber-400'>profile</button>
        </form>
      </div>
    </ div>
  )
}
