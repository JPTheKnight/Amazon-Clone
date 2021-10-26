import React from 'react';

import { Cell } from './Grid.styles';

const NormalCell = ({title, imgsrc, link}) => {

    return (
        <Cell>
            <div className='title'><b>{title}</b></div>
            <div className='product-image'><img width='275px' height='300px' src={imgsrc} alt=''/></div>
            <div><a className='link' href='/'>{link}</a></div>
        </Cell>
    );
}

export default NormalCell;