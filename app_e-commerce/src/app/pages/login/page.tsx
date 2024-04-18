import React, { useState } from 'react';
import FormLogin from '../../../app/components/FormLogin';

const Login = () => {
  return (
    <div className='text-white w-screen h-screen h-[100vh] flex justify-center items-center bg-cover' style={{background: "url('/Ecommerce.png')", backgroundSize: 'cover'}}>
      <FormLogin/>
    </div>
  )
}

export default Login