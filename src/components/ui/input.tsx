interface InputFieldProps {
    type: string;
    id: string;
    placeholder: string;
    isRequired: boolean;
    title: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, id, placeholder, isRequired, title }) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">{title}</label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                required={isRequired}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
    );
};

export default InputField;