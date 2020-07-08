import React from 'react';

const Input = ({className, onChange, value, type, placeholder}) => {
    return (
        <input
            className={className}
            onChange={onChange}
            value={value}
            type={type}
            placeholder={placeholder}
        />
    );
};

export default Input;