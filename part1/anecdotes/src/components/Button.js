import React from 'react';

function Button({title, handleClick}) {
    return <button 
        onClick={handleClick}
    >
        {title}
    </button>;
}

export default Button;