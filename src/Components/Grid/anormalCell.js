import React from 'react';

import { Cell } from './Grid.styles';

const AnormalCell = ({title, imgsrc= {}, products={}, link}) => {

    return (
        <Cell>
            <div className='title'><b>{title}</b></div>
            <div className='grid'>
                <div className='cells'>
                    <div className='icon'><img alt='' width='120px' height='115px' src={imgsrc[0]} /></div>
                    <div className='type'>{products[0]}</div>
                </div>
                <div className='cells'>
                    <div className='icon'><img alt='' width='120px' height='115px' src={imgsrc[1]} /></div>
                    <div className='type'>{products[1]}</div>
                </div>
                <div className='cells'>
                    <div className='icon'><img alt='' width='120px' height='115px' src={imgsrc[2]} /></div>
                    <div className='type'>{products[2]}</div>
                </div>
                <div className='cells'>
                    <div className='icon'><img alt='' width='120px' height='115px' src={imgsrc[3]} /></div>
                    <div className='type'>{products[3]}</div>
                </div>
            </div>
            <div><a className='link' href='/'>{link}</a></div>
        </Cell>
    );
}

export default AnormalCell;
