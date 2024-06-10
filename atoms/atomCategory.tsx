import { atom } from 'jotai';
import { Category } from '@/prisma/generated/type-graphql/models/Category';

const CartCategory = [
    {
        name: "Ropa",
        description: "Ropa de moda",
        id: 1
    },
    {
        name: "Calzado",
        description: "Calzado de moda",
        id: 2
    },
    {
        name: "Accesorios",
        description: "Accesorios de moda",
        id: 3
    },
    {
        name: "Hogar",
        description: "Articulos para el hogar",
        id: 4
    }
];


export const CategoryAtom = atom(CartCategory);
export const cartCategoryAtom = atom([]);


