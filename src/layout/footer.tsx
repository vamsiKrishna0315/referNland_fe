import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-800 text-white p-4 mt-10">
            <p>Refer N Land Footer - {currentYear}</p>
        </footer>
    );
};

export default Footer;
