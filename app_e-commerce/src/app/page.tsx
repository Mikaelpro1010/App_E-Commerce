import React from 'react';
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import CarouselCustomNavigation from "./components/CarouselCustomNavigation";
import Footer from "./components/Footer";
import Link from 'next/link';

const cardData = [
    { name: 'Cimento Votoran', preco: 'R$33,15' },
    { name: 'Tijolo 6 furos', preco: 'R$1,20' },
    { name: 'Bloco de concreto', preco: '$3,07' },
    { name: 'Telha Pvc', preco: '$79,99' },
    { name: 'Argamassa estrutural', preco: '$189,90' },
    { name: 'Argamasse Alvenaria', preco: '$20,90' },
    { name: 'Ferro para construção', preco: '$35,80' },
    { name: 'Chapa Lisa', preco: '$289,90' },
    { name: 'Viga 1 Laminada', preco: 'R$1000,00' },
    // Adicione mais dados conforme necessário
];

function landingPage(){
    return (
        <main className="mx-auto">
            <Navbar />
            <div className="mt-3 mx-auto p-3">
                <CarouselCustomNavigation />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5 container mx-auto">
                {cardData.map((item, index) => (
                    <Card key={index} name={item.name} preco={item.preco} />
                ))}
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default landingPage