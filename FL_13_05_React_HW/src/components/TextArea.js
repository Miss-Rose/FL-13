import React from 'react';

const TextArea = ({ className, onChange, value }) => {
    return (
        <textarea
            className={className}
            onChange={onChange}
            value={value}
        />
    );
};

export default TextArea;