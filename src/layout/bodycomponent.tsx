import React, { useState } from 'react';
import BodyImage from '@/components/bodyimage';
import Modal from '../components/ui/modal';
import Form from '../components/ui/form';
import InputField from "../components/ui/input";

const BodyComponent: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({
        title: '',
        content: ''
    });
    const InputFields = [
        <InputField type="text" id="name" placeholder="Enter Your Name" isRequired={true} title="Name" />,
        <InputField type="email" id="email" placeholder="Enter Your Email" isRequired={true} title="Email" />,
        <InputField type="password" id="password" placeholder="Enter Your Password" isRequired={true} title="Password" />,
        <InputField type="password" id="chk_password" placeholder="Enter Your Password" isRequired={true} title="Check Password" />,
        <InputField type="number" id="mobile_no" placeholder="Enter Your Mobile No" isRequired={true} title="Mobile No" />,
        <InputField type="checkbox" id="act_as_both" placeholder="" isRequired={false} title="Act as Lander Too" />,
    ];


    const [extraContent, setExtraContent] = useState<React.ReactNode>(null);

    const handleOpenModal = (title: string, content: string, extra?: React.ReactNode) => {
        setModalContent({ title, content });
        setExtraContent(extra || null);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setExtraContent(null);
    };

    return (
        <div className="bg-white">
            <div className="flex justify-between items-center py-28 px-5">
                <BodyImage
                    src="https://assets.website-files.com/5da6261a45eff13329fdd324/5da6272f2b9e580c97304a42_hero-coffee.svg"
                    title="Refer"
                    buttonText="Refer N Earn"
                    onButtonClick={() =>
                        handleOpenModal("Refer", "Earn rewards by referring friends.", <Form inputFields={InputFields} />)
                    }
                />
                <BodyImage
                    src="https://blush.design/api/download?shareUri=AtJqwLxSI&w=800&h=800&fm=png"
                    title="Lander"
                    buttonText="Land N Earn"
                    onButtonClick={() =>
                        handleOpenModal("Lander", "Sign up to land and earn rewards.")
                    }
                />
            </div>
            {showModal && (
                <Modal
                    title={modalContent.title}
                    content={modalContent.content}
                    onClose={handleCloseModal}
                >
                    {extraContent}
                </Modal>
            )}
        </div>
    );
};

export default BodyComponent;
