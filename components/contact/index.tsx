import React from 'react';
import { motion } from 'framer-motion';

const Index: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-200">
      <section
        className="min-h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="flex flex-col min-h-screen bg-black bg-opacity-70 backdrop-blur-sm">
          <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
            <div className="flex-1 lg:flex lg:items-center lg:gap-12">
              <motion.div 
                className="text-white lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                  Ultimate Solution
                </h1>

                <p className="text-lg leading-relaxed mb-8">
                  Ofrecemos pruductos de calidad, con buen precio y garantía. Estamos dispuestos a escuchar tus necesidades.
                  Cuentanos sobre tu proyecto y te ayudaremos a hacerlo realidad.
                </p>

                <motion.button 
                  className="px-8 py-3 text-sm font-medium tracking-wide text-white uppercase transition-all duration-300 transform bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contáctanos
                </motion.button>

                <div className="mt-12">
                  <h3 className="text-gray-300 mb-4">Síguenos en</h3>

                  <div className="flex space-x-4">
                    {['twitter', 'linkedin', 'facebook', 'instagram'].map((social) => (
                      <motion.a
                        key={social}
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className="sr-only">{social}</span>
                        {/* Aquí irían los SVGs de tus redes sociales */}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="mt-10 lg:mt-0 lg:w-1/2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              >
                <div className="w-full p-8 bg-white bg-opacity-10 shadow-2xl rounded-2xl backdrop-filter backdrop-blur-sm">
                  <h2 className="text-2xl font-semibold text-white mb-6">
                    Conversemos sobre tus necesidades
                  </h2>

                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                        Nombre completo
                      </label>
                      <motion.input
                        id="name"
                        type="text"
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                        Email
                      </label>
                      <motion.input
                        id="email"
                        type="email"
                        placeholder="jane@example.com"
                        className="w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
                        Mensaje
                      </label>
                      <motion.textarea
                        id="message"
                        placeholder="Cuéntanos sobre tu proyecto..."
                        className="w-full h-40 px-4 py-3 bg-gray-800 text-white placeholder-gray-500 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      ></motion.textarea>
                    </div>

                    <motion.button 
                      className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white uppercase transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Enviar mensaje
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
