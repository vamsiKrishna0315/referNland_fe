import React from 'react';
import BodyImage from '@/components/bodyimage';

const BodyComponent: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="flex justify-between items-center py-28 px-5">
                <BodyImage
                    src="https://assets.website-files.com/5da6261a45eff13329fdd324/5da6272f2b9e580c97304a42_hero-coffee.svg"
                    title="Refer"
                    buttonText="Refer N Earn"
                    onButtonClick={() => console.log("Refer Now clicked")}
                />
                <BodyImage
                    src="https://blush.design/api/download?shareUri=AtJqwLxSI&w=800&h=800&fm=png"
                    title="Lander"
                    buttonText="Land N Earn"
                    onButtonClick={() => console.log("Sign Up clicked")}
                />
            </div>
        </div>
    );
}

export default BodyComponent;
