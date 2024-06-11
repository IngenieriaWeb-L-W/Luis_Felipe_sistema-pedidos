import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { cartAtom } from '@atoms/atomProducts';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, useSession, signOut } from 'next-auth/react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const { data: session, status } = useSession();
  const [cart] = useAtom(cartAtom);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-blue-500 shadow-lg dark:bg-gray-800"
    >
      <div className="container px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="text-white uppercase hover:text-white">
              <Image
                className="w-auto h-6 sm:h-7"
                src="https://merakiui.com/images/full-logo.svg"
                width={200}
                height={50}
                alt=""
              />
            </div>
          </Link>
          <div className="flex items-center justify-end space-x-4 lg:flex">
            <Link href="/admin">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white uppercase hover:text-blue-200"
              >
                Admin
              </motion.div>
            </Link>
            <Link href="/products">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white uppercase hover:text-blue-200"
              >
                Store
              </motion.div>
            </Link>
            <Link href="/checkout">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white uppercase hover:text-blue-200"
              >
                Checkout
              </motion.div>
            </Link>
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white uppercase hover:text-blue-200"
              >
                Contact
              </motion.div>
            </Link>
            <div>
              {session ? (
                <div>
                  <motion.p
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white uppercase hover:text-blue-200"
                  >
                    {session.user?.name} 
                    {/* - {session.user?.email} */}
                  </motion.p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white uppercase hover:text-blue-200"
                    onClick={() => {
                      signOut();
                    }}
                  >
                    Cerrar Sesión
                  </motion.button>
                </div>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    signIn('auth0');
                  }}
                  className="text-white uppercase hover:text-blue-200"
                >
                  Inicio Sesión
                </motion.button>
              )}
            </div>
            <div className="text-4xl text-white font-bold">{cart.length}</div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
