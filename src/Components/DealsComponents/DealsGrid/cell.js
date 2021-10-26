import React from 'react';
import { useStateValue } from '../../../StateProvider';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Cell } from './DealsGrid.styles';

const NormalCell = ({id, name, num_left, dotd, price, oldprice, percentage, comp, imgsrc, rating_stars, rating}) => {

    const [{basket, user}, setBasket] = useStateValue();
    const [inCartAnim, setInCartAnim] = useState(false);

    const addItem = () => {
        for (let i=0; i < basket.length; i++)
        {
            if (basket[i].id === id)
            {
                setInCartAnim(true);
                return;
            }
        }

        setBasket 
        ({
            type: 'add_to_basket',
                item:
                {
                    id: id, 
                    info: {
                        name: name,
                        imgsrc: imgsrc,
                        price: price,
                        num_left: num_left,
                        ship_loc: comp,
                        gift_av: false
                    },
                    selected: true,
                }
            }
        );
            
    }

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <Cell>
            <img alt=''  src={imgsrc} />
            <div className='text'>
                {dotd && 
                <div>
                    <div className='deal-otd'>
                        <p><b></b></p>
                        <span><b>DEAL OF THE DAY</b></span>
                    </div>
                    <div className='price'>${numberWithCommas(price)}</div>
                </div>
                }
                {!dotd && <div className='price-no-discount'>${numberWithCommas(price)}</div>}
                {oldprice!=='' && <div className='old-price'>List: <del>{oldprice}</del> {percentage}</div>}
                <a href='/'><div className='product-name'>{comp}</div></a>
                <div className='full-rate'>
                    {Array(rating_stars).fill().map((_, i) => (
                        <span>⭐</span>
                    ))}
                    <span className='rating'>{rating}</span>
                </div>
            </div>
            {inCartAnim && <div className='already-in-cart'>Already in cart</div>}
            {user ? <div className='cart'><button className='cart-butt' onClick={addItem}>Add to Cart</button></div>:
                    <Link to='/sign-in'><div className='cart'><button className='cart-butt'>Add to Cart</button></div></Link>}
        </Cell>
    );
}

export default NormalCell;