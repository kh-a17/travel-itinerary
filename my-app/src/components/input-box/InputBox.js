import './InputBox.css';

const InputBox = ({ placeholder }) => {

    return (
        <input
            className='input-wrapper'
            placeholder={`${placeholder}`}
        />
    );
}

export default InputBox;
