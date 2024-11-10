import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="flex justify-between items-center py-2 px-5 border-b-2 border-gray-200">
                <div className="flex items-center">
                    {/* Logo */}
                    {/* <img
                        src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png"
                        alt="Logo de la empresa"
                        className="w-28 h-12 ml-6"
                    /> */}
                    <h2 className='font-black text-center'>Refer N Land</h2>
                </div>

                {/* Botones de Registro y Contacto */}
                <div className="flex items-center space-x-2">

                    {/* <Button> Registration</Button>
                    <Button> Login</Button> */}

                </div>
            </div>
        </header>
    );
};

export default Header;
