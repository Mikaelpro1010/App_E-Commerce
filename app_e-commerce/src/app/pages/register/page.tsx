import React, { useState } from 'react';
import FormSignUp from '../../components/FormSignUp';

function SignUp() {
  return (
    <div className='text-white w-screen h-screen h-[100vh] flex justify-center items-center bg-cover' style={{background: "url('/Ecommerce.png')", backgroundSize: 'cover'}}>
      <FormSignUp
      />
    </div>
  )
}
export default SignUp;