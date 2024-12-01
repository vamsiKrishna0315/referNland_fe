import React from "react";

// Type for the input fields prop
interface FormProps {
    inputFields: JSX.Element[]; // Array of JSX elements (InputField components)
}

const Form: React.FC<FormProps> = ({ inputFields }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            {inputFields.map((field, index) => (
                <div key={index} className="mb-4">
                    {field}
                </div>
            ))}
            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
    );
};

export default Form;
