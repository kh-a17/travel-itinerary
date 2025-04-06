import './InputBox.css';


const InputBox = ({ placeholder, className }) => {

    return (
        <input
            className={`input-wrapper ${className}`}
            placeholder={`${placeholder}`}
        />
        
    );
}

export default InputBox;
