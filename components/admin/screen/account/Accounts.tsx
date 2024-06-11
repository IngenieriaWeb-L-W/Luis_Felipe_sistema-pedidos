// components/Accounts.tsx
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Accounts: React.FC = () => {
    const user = {
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        joined: 'January 1, 2020',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.',
    };

    return (
        <motion.div 
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center space-x-4">
                <Image
                    className="object-cover w-24 h-24 rounded-full"
                    src={user.avatar}
                    alt="User avatar"
                    width={96}
                    height={96}
                />
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">{user.name}</h1>
                    <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
                    <p className="text-gray-600 dark:text-gray-400">Joined: {user.joined}</p>
                </div>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Bio</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{user.bio}</p>
            </div>
        </motion.div>
    );
};

export default Accounts;
