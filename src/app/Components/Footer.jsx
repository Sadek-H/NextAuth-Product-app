import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} My E-Commerce Site. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;