import { atom } from 'jotai';


const CartProducts = [
  {
    id: 18,
    name: 'Camisa cuello manga larga',
    price: 221,
    description:
      'Camisa cuello manga larga, color azul, talla M, 100% algodón, lavar en seco, no planchar, no usar blanqueador.',
    image: 'https://images.unsplash.com/photo-1598961942613-ba897716405b',
    category: 'Ropa',
  },
  {
    id: 707,
    name: 'Lavadora 10kg',
    price: 181,
    description:
      'Lavadora negra, capacidad 10kg, 1200rpm, 16 programas de lavado, eficiencia energética A+++, 60x85x60cm.',
    image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1',
    category: 'Hogar',
  },
  {
    id: 447,
    name: 'Nevera Inox 200L',
    price: 79,
    description: 'Nevera inoxidable, capacidad 200L, 185x60x60cm, eficiencia energética A+, 40dB, 4 estrellas.',
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5',
    category: 'Hogar',
  },
  {
    id: 940,
    name: 'Reloj de Pulsera Digital 2.0',
    price: 338,
    description:
      'Reloj de pulsera digital, pantalla táctil, resistente al agua, batería de larga duración, correa ajustable, 40mm.',
    image: 'https://images.unsplash.com/photo-1542541864-4abf21a55761',
    category: 'Accesorio',
  },
  {
    id: 321,
    name: 'Billetera de Cuero Marrón',
    price: 61,
    description:
      'Billetera de cuero marrón, 100% cuero, 8 ranuras para tarjetas, 2 compartimentos para billetes, 1 monedero, 10x12cm.',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da',
    category: 'Accesorio',
  },
  {
    id: 504,
    name: 'Ventilador de Torre 60W',
    price: 477,
    description:
      'Ventilador de torre, 60W, 3 velocidades, 3 modos de ventilación, temporizador, mando a distancia, 80x20x20cm.',
    image: 'https://resources.sears.com.mx/medios-plazavip/s2/10173/725558/5b199a1065e8b-sfm-45-1600x1600.jpg?scale=500&qlty=75',
    category: 'Hogar',
  },
  {
    id: 670,
    name: 'Blue Jeans 501',
    price: 47,
    description:
      'Blue jeans 501, corte clásico, ajuste perfecto, 100% algodón, lavar en frío, no planchar, no usar blanqueador.',
    image: 'https://static.dafiti.com.co/p/levis-9276-1768722-1-product.jpg',
    category: 'Ropa',
  },
  {
    id: 833,
    name: 'Zapato tipo Mocasín 2.0',
    price: 99,
    description: 'Zapato tipo mocasín, color negro, talla 42, 100% cuero, suela de goma, 2cm de tacón.',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772',
    category: 'Calzado',
  },
  {
    id: 892,
    name: 'Zapato deportivo marca Adida',
    price: 190,
    description: 'Zapato deportivo, cómodo y con buen agarre. Color blanco y azul',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    category: 'Calzado',
  },
  {
    id: 90,
    name: 'Vestido negro',
    price: 477,
    description: 'Vestido de fiesta, negro, en algodón, todas las tallas',
    image: 'https://static.dafiti.com.co/p/mp-9728-5426442-1-product.jpg',
    category: 'Ropa',
  },
  {
    id: 1,
    name: "Camiseta de Algodón",
    price: 19.99,
    description: "Camiseta de algodón suave y cómoda",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    category: "Ropa",
  },
  {
    id: 2,
    name: "Jeans Clásicos",
    price: 39.99,
    description: "Jeans de corte clásico y ajuste perfecto",
    image: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab",
    category: "Ropa",
  },
  {
    id: 3,
    name: "Zapatillas Deportivas",
    price: 49.99,
    description: "Zapatillas cómodas y duraderas para hacer ejercicio",
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
    category: "Calzado",
  },
  {
    id: 4,
    name: "Reloj de Pulsera",
    description: "Reloj de pulsera elegante y de alta calidad",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
    category: "Accesorios",
  },
  {
    id: 5,
    name: "Mochila de Viaje",
    description: "Mochila de viaje resistente y espaciosa",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    category: "Accesorios",
  },
  {
    id: 6,
    name: "Taza de Cerámica",
    description: "Taza de cerámica con diseño único",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
    category: "Hogar",
  }
];


export const productsAtom = atom(CartProducts);
export const cartAtom = atom([]);
