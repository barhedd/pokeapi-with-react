import React from 'react';

const Button = ( { action, onPagination = () => {} } ) => {
    let actionText = action.toUpperCase();
    return <button 
                onClick={ () => { onPagination( action ); }}
                className="bg-red-500 hover:bg-red-700 text-white mx-2 px-4 py-1 rounded text-xl">{ actionText }
            </button>;
}

export default Button;