"use client"

import { useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import ButtonProyect from "@/components/ui/ButtonProyect";
import ProductName from "@/components/ui/ProductName";
import CategoryMenu from "@/components/ui/CategoryMenu";
import { productsAtom, cartAtom } from "@atoms/atomProducts";
import { CategoryAtom } from "@/atoms/atomCategory";
import { useAtom } from 'jotai';
import classNames from 'classnames';

export default function Component() {
  const [selectedCategory, setSelectedCategory] = useState("Ropa");
  const [products] = useAtom(productsAtom);
  const [cart, setCart] = useAtom(cartAtom);
  const [categories] = useAtom(CategoryAtom);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const filteredProducts = products.filter(product => product.category === selectedCategory);

  return (
    <div className="grid md:grid-cols-[280px_1fr] gap-8 p-8">
      <CategoryMenu
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      <div>
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Productos</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col h-64">
                <ProductName name={product.name} className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400" />
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{product.description}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">${product.price.toFixed(2)}</span>
                  <ButtonProyect
                    variant="outline"
                    size="sm"
                    classnames="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
                    onClick={() => addToCart(product)}
                  >
                    Agregar
                  </ButtonProyect>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 col-span-2 md:col-span-1 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Carrito</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">Tu carrito está vacío.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 relative rounded-md overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <ProductName name={item.name} className="text-lg font-semibold text-gray-800 dark:text-gray-200" />
                    <p className="text-gray-600 dark:text-gray-400">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <ButtonProyect variant="ghost" size="icon" classnames="text-red-500 hover:bg-red-100 dark:hover:bg-red-900" onClick={() => removeFromCart(item.id)}>
                  <XIcon className="w-5 h-5" />
                </ButtonProyect>
              </div>
            ))}
            <div className="flex items-center justify-between bg-blue-600 text-white rounded-lg p-4 shadow-lg">
              <h3 className="text-xl font-bold">Total</h3>
              <span className="text-2xl font-bold">${total.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}