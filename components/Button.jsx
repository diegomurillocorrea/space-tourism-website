const Button = ({ children, classes, onClick }) => {
    return (
        <button
            className={`${classes} focus:outline-none`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;