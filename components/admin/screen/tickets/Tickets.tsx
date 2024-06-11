// components/Tickets.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ropaImg from '/public/images/ropa.jpg';
import calzadoImg from '/public/images/calzado.jpg';
import accesoriosImg from '/public/images/accesorios.jpg';
import hogarImg from '/public/images/hogar.jpg';
import techImg from '/public/images/tech.jpg';
import juguetesImg from '/public/images/juguetes.jpg';
import deportesImg from '/public/images/deportes.jpg';
import viajesImg from '/public/images/viajes.jpg';

const promotions = [
    {
        id: 1,
        name: "Ropa",
        description: "Ropa de moda con descuentos exclusivos",
        imageUrl: ropaImg,
    },
    {
        id: 2,
        name: "Calzado",
        description: "Calzado de moda a precios increíbles",
        imageUrl: calzadoImg,
    },
    {
        id: 3,
        name: "Accesorios",
        description: "Accesorios de moda para completar tu estilo",
        imageUrl: accesoriosImg,
    },
    {
        id: 4,
        name: "Hogar",
        description: "Artículos para el hogar con grandes descuentos",
        imageUrl: hogarImg,
    },
    {
        id: 5,
        name: "Tecnología",
        description: "Productos de tecnología de última generación",
        imageUrl: techImg,
    },
    {
        id: 6,
        name: "Juguetes",
        description: "Juguetes divertidos para niños de todas las edades",
        imageUrl: juguetesImg,
    },
    {
        id: 7,
        name: "Deportes",
        description: "Equipamiento deportivo de alta calidad",
        imageUrl: deportesImg,
    },
    {
        id: 8,
        name: "Viajes",
        description: "Ofertas increíbles en viajes y paquetes vacacionales",
        imageUrl: viajesImg,
    },
];

const Tickets = () => {
return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Promociones destacadas</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {promotions.map((promo) => (
        <motion.div
            key={promo.id}
            className="overflow-hidden rounded-lg shadow-lg bg-gray-100 dark:bg-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Image
            className="w-full h-48 object-cover"
            src={promo.imageUrl}
            alt={promo.name}
            width={400}
            height={200}
            />
            <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{promo.name}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{promo.description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-700">
                Ver promoción
            </button>
            </div>
        </motion.div>
        ))}
    </div>
    </div>
);
};
export default Tickets;
