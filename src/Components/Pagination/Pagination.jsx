import React from 'react';
import NextButton from './NextButton/NextButton';
import PreviusButton from './PreviusButton/PreviusButton';

const Pagination = ( { onPagination = () => {} } ) => {
    return (
        <div>
            <PreviusButton onPagination={ onPagination } />
            <NextButton onPagination={ onPagination } />
        </div>
    ); 
}

export default Pagination;