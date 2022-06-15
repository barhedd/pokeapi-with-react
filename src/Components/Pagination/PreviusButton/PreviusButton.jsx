import React from 'react';
import Button from '../Button/Button';

const PreviusButton = ( { onPagination = () => {} } ) => {
    return <Button action='previus' onPagination={ onPagination } />;
}

export default PreviusButton;