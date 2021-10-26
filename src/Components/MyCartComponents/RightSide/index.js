import React from 'react';

import { Wrapper, Content } from './RightSide.styles';

import { useStateValue } from '../../../StateProvider';
import { basketTotalPrice } from '../../../reducer';

const RightSide = () => {

    const [{basket}] = useStateValue();

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <Wrapper>
            <Content>
                <div className='checkout-bg'>
                    <div className='subtotal'>Subtotal ({basket.length} items): <b>${numberWithCommas(parseFloat(basketTotalPrice(basket)).toFixed(2))}</b></div>
                    <div className='checkout'><button>Proceed to checkout</button></div>
                </div>
                <div className='recommendations'>
                    <div className='text'><span><b>Recommendations for items from across our store</b></span></div>
                    <div className='row'>
                        <div><img alt='' src='https://images-na.ssl-images-amazon.com/images/I/91v%2BlqkUGHL._AC_UL100_SR100,100_.png'/></div>
                        <div className='infos'>
                            <a href='/'><div className='title'>Game of War - Fire Age</div></a>
                            <div className='company'>Machine Zone</div>
                            <div className='rating'>
                                <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                                <span>10,725</span>
                            </div>
                            <div className='price'>$0.00</div>
                            <div className='add-to-cart'><button>Add to Cart</button></div>
                        </div>
                    </div>
                    <div className='row'>
                        <div><img alt='' src='https://images-na.ssl-images-amazon.com/images/I/81g-7SUWiUL._AC_UL100_SR100,100_.png'/></div>
                        <div className='infos'>
                            <a href='/'><div className='title'>Final Fantasy XV: The Last Soldier</div></a>
                            <div className='company'>Epic Action LLC</div>
                            <div className='rating'>
                                <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                                <span>10,725</span>
                            </div>
                            <div className='price'>$0.00</div>
                            <div className='add-to-cart'><button>Add to Cart</button></div>
                        </div>
                    </div>
                    <div className='row'>
                        <div><img alt='' src='https://images-na.ssl-images-amazon.com/images/I/510ECmU3NVL._AC_UL100_SR100,100_.jpg'/></div>
                        <div className='infos'>
                            <a href='/'><div className='title'>Mafia City</div></a>
                            <div className='company'>Yotta Games Limited</div>
                            <div className='rating'>
                                <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                                <span>10,725</span>
                            </div>
                            <div className='price'>$0.00</div>
                            <div className='add-to-cart'><button>Add to Cart</button></div>
                        </div>
                    </div>
                    <div className='row'>
                        <div><img alt='' src='https://images-na.ssl-images-amazon.com/images/I/515F%2Bb7SLgL._AC_UL100_SR100,100_.jpg'/></div>
                        <div className='infos'>
                            <a href='/'><div className='title'>World War 2</div></a>
                            <div className='company'>Chinese Corp.</div>
                            <div className='rating'>
                                <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                                <span>10,725</span>
                            </div>
                            <div className='price'>$0.00</div>
                            <div className='add-to-cart'><button>Add to Cart</button></div>
                        </div>
                    </div>
                </div>
            </Content>
        </Wrapper>
    )
}

export default RightSide;