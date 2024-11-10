import * as React from 'react';

interface BodyImageProps {
    src: string;
    alt?: string;
    title: string;
    buttonText: string;
    onButtonClick?: () => void;
}

const BodyImage: React.FC<BodyImageProps> = ({ src, alt = "An Image", title, buttonText, onButtonClick }) => {
    return (
        <div className="w-1/2 relative group overflow-hidden">
            <img
                src={src}
                alt={alt}
                className="w-full h-auto transform transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h2 className="text-white text-lg font-semibold mb-2">{title}</h2>
                <button
                    onClick={onButtonClick}
                    className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
}

export default BodyImage;
