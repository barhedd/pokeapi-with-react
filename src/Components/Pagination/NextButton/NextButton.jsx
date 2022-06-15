import React from 'react';
import Button from '../Button/Button';

const NextButton = ( { onPagination = () => {} } ) => {
    return <Button action='next' onPagination={ onPagination } />;
}

export default NextButton;