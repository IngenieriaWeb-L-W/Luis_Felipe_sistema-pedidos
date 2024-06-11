import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Dashboard</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
            Welcome to the Dashboard! Here you can find an overview of your application.
        </p>
        </div>
    );
};

export default Dashboard;
