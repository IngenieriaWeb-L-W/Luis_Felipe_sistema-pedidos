import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Settings = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        password: "********",
        phoneNumber: "123-456-7890",
    });

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleFieldChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const renderField = (label, value, name) => {
        return isEditing ? (
            <input
                type="text"
                className="w-full max-w-md px-4 py-2 bg-gray-800 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={value}
                name={name}
                onChange={handleFieldChange}
            />
        ) : (
            <span className="text-gray-300">{value}</span>
        );
    };

    return (
        <div className="bg-gray-900 text-gray-200">
            <section className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
                // backgroundSize: "cover",
                // backgroundPosition: "center",
                // backgroundAttachment: "fixed",
                margin: "0 -2rem" // Agregar margen a los lados
            }}>
                <div className="flex flex-col min-h-screen bg-black bg-opacity-70 backdrop-blur-sm">
                    <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
                        <div className="flex-1 lg:flex lg:items-center lg:gap-12">
                            <motion.div 
                                className="text-white" 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}>
                                <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2 py-4 px-20">
                                    Configuración de la cuenta
                                </h1>

                                <div className="grid grid-cols-1 gap-4 mb-8">
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-medium w-1/3">Nombre:</span>
                                        {renderField("Nombre", userData.name, "name")}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-medium w-1/3">Correo electrónico:</span>
                                        {renderField("Correo electrónico", userData.email, "email")}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-medium w-1/3">Contraseña:</span>
                                        {isEditing ? (
                                            <input
                                                type="password"
                                                className="w-full max-w-md px-4 py-2 bg-gray-800 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                value={userData.password}
                                                name="password"
                                                onChange={handleFieldChange}
                                            />
                                        ) : (
                                            <span className="text-gray-300">********</span>
                                        )}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-medium w-1/3">Número de teléfono:</span>
                                        {renderField("Número de teléfono", userData.phoneNumber, "phoneNumber")}
                                    </div>
                                </div>

                                <motion.button className="px-8 py-3 text-sm font-medium tracking-wide text-white uppercase transition-all duration-300 transform bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={toggleEdit}>
                                    {isEditing ? "Guardar cambios" : "Editar"}
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Settings;
