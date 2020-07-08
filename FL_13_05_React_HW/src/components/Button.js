import React from 'react';

const Button = ({onClick, className, type, children}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={className}
        >
            {children}
        </button>
    );
};

export default Button;