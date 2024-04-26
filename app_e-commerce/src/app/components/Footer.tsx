import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='bg-gray-600 text-white py-4 mt-10'>
                <div className='flex justify-center grid justify-items-stretch'>
                    <h1 className='justify-self-center'>Se interessou por Algo?</h1>
                    <h1 className='justify-self-center'>Entre em Contato!</h1>
                    <div className='flex items-center mt-2 mb-2'>
                        <div className='flex items-center mx-4'>
                            <div>
                                <img src="/whatsapp.png" alt="" width="25" />
                            </div>
                            <div className='mx-2 hover:text-blue-500'>
                                <h2><Link href=''>Watsapp</Link></h2>
                            </div>
                        </div>
                        <div className='flex items-center mx-4'>
                            <div>
                                <img src="/email.png" alt="" width="25" />
                            </div>
                            <div className='mx-2 hover:text-blue-500'>
                            <h2><Link href=''>Email</Link></h2>
                            </div>
                        </div>
                        <div className='flex items-center mx-4'>
                            <div>
                                <img src="/instagram.png" alt="" width="25" />
                            </div>
                            <div className='mx-2 hover:text-blue-500'>
                                <h2><Link href=''>Instagram</Link></h2>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer;