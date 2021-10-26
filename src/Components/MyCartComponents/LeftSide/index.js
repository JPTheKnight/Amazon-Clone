import React from 'react';
import { useState } from 'react';
import { useStateValue } from '../../../StateProvider';
import { basketTotalPrice } from '../../../reducer';

import NormalCell from './cell';

import { Wrapper, Content } from './LeftSide.styles';

const LeftSide = () => {

    const [savedItems, setSavedItems] = useState(true);
    const [{basket}] = useStateValue();

    var cellArray = [];

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const fillCellArray = (basket) => {
        for(let i=0;i<basket.length;i++)
        {
            cellArray.push(<NormalCell id={basket[i].id} title={basket[i].info.name} imgsrc={basket[i].info.imgsrc} number={basket[i].info.num_left} ship_loc={basket[i].info.ship_loc} price={basket[i].info.price} gift_av={false} className='product-item'/>);
        }
    }

    const your_items_options = index => {
        if (index === '0')
        {
            try{
                document.getElementsByClassName('items-saved')[0].className='items-saved-pressed';
                document.getElementsByClassName('buy-again-pressed')[0].className='buy-again';
                setSavedItems(true);
            }
            catch{
                return;
            }
        }
        else if(index === '1')
        {
            try{
                document.getElementsByClassName('items-saved-pressed')[0].className='items-saved';
                document.getElementsByClassName('buy-again')[0].className='buy-again-pressed';
                setSavedItems(false);
            }
            catch{
                return;
            }
        }
    }

    return (
        <Wrapper>
            <Content>
                <div className='shopping-cart'>
                    <div className='title'>Shopping Cart</div>
                    <a href='/'><div className='deselect'>Deselect all items</div></a>
                    <div className='price-title'>Price</div>
                    <hr/>
                    <div>
                        {fillCellArray(basket)}
                        {cellArray}
                    </div>
                    <div className='subtotal'>Subtotal ({basket.length} items): <b>${numberWithCommas(parseFloat(basketTotalPrice(basket)).toFixed(2))}</b></div>
                </div>
                <div className='your-items'>
                    <div className='title'><b>Your Items</b></div>
                    <div className='options'>
                        <span className='items-saved-pressed' onClick={() => your_items_options('0')}>No items saved for later</span>
                        <span className='buy-again' onClick={() => your_items_options('1')}>Buy it again</span>
                    </div>
                    <hr/>
                    {!savedItems && <div className='items-to-buy-again'>No items to Buy again.</div>}
                </div>
                <div className='bottom-text'>
                    <p>The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. <a href='/'>Learn more</a></p>
                    <p>Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
                </div>
            </Content>
        </Wrapper>
    )
}

export default LeftSide;
