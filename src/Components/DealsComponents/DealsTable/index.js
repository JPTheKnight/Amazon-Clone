import React from 'react';
import DealsGrid from '../DealsGrid';

import { Wrapper, Content } from './DealsTable.styles';

const DealsTable = () => {

    var clicked = false;
    
    const click = event => {
        if (event.target.type !== 'submit')
        {
            clicked = false;
            document.getElementsByClassName('dropdown')[0].className = 'dropdown-disabled';
            document.removeEventListener('click', click);
        }
    }

    const dropdown = () => {

        if (!clicked)
        {
            document.getElementsByClassName('dropdown-disabled')[0].className = 'dropdown';
            clicked = true;
            document.addEventListener('click', click);
        }
    }
    
    const sortChoose = event => {
        var options = document.getElementsByClassName('dropdown-chosen-sort');
        for(let i=0; i < options.length; i++)
        {
            options[i].className='dropdown-not-chosen-sort';
        }

        event.target.className='dropdown-chosen-sort';
        document.getElementsByClassName('f-butt')[0].textContent = event.target.textContent + '⮟';
    }

    return (
        <Wrapper>
            <Content>
                <div className='top-text'>
                    <span>Showing 1-40 of 1000 results</span>
                    <span className='featured'>
                        <span>Sort by</span>
                        <span><button onClick={dropdown} className='f-butt'>Featured&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#11167;</button></span>                        
                        <div className='dropdown-disabled'>
                            <div onClick={sortChoose} className='dropdown-not-chosen-sort'>Featured</div>
                            <div onClick={sortChoose} className='dropdown-not-chosen-sort'>Price - Low to High</div>
                            <div onClick={sortChoose} className='dropdown-not-chosen-sort'>Price - High to Low</div>
                            <div onClick={sortChoose} className='dropdown-not-chosen-sort'>Discount - Low to High</div>
                            <div onClick={sortChoose} className='dropdown-not-chosen-sort'>Discount - High to Low</div>
                        </div>
                    </span>
                </div>
                <div className='body-table'>
                    <div className='left-side'>
                        <div className='title'><b>Department</b></div>
                        <div>
                            <span><input type="checkbox" /></span>
                            <span>Amazon Devices</span>
                        </div>
                        <div>
                            <span><input type="checkbox" /></span>
                            <span>Arts, Crafts & Sewing</span>
                        </div>
                        <div>
                            <span><input type="checkbox" /></span>
                            <span>Automotive & Motorcycle</span>
                        </div>
                        <div>
                            <span><input type="checkbox" /></span>
                            <span>Baby</span>
                        </div>
                        <div>
                            <span><input type="checkbox" /></span>
                            <span>Baby Clothing & Accessories</span>
                        </div>
                        <div>
                            <span><input type="checkbox" /></span>
                            <span>Beauty</span>
                        </div>
                        <div>
                            <span><input type="checkbox" /></span>
                            <span>Books</span>
                        </div>
                        <div>
                            <span><input type="checkbox" /></span>
                            <span>Boys’ Fashion</span>
                        </div>
                        <div>
                            <span><input type="checkbox" /></span>
                            <span>Camera & Photo</span>
                        </div>
                        <div>
                            <span><input type="checkbox" /></span>
                            <span>Cell Phones & Accessories</span>
                        </div>
                        <div>
                            <span><input type="checkbox" /></span>
                            <span>Computers & Accessories</span>
                        </div>
                        <div>
                            <span><input type="checkbox" /></span>
                            <span>Costumes & Accessories</span>
                        </div>
                        <a href='/'><div>&#11167; See more Department</div></a>

                        <div className='title'><b>Deal Type</b></div>                   
                        <a href='/'><div>Deal of the Day</div></a>
                        <a href='/'><div>Lightning Deals</div></a>
                        <a href='/'><div>Savings & Sales</div></a>
                        <a href='/'><div>Prime Early Access Deals</div></a>

                        <div className='title'><b>Availability</b></div>
                        <div>
                            <span><input type="checkbox" /></span>
                            <span>Active</span>
                        </div>
                        <div>
                            <span><input type="checkbox" /></span>
                            <span>Upcoming</span>
                        </div>
                        <div>
                            <span><input type="checkbox" /></span>
                            <span>Missed</span>
                        </div>

                        <div className='title'><b>Price</b></div>                   
                        <a href='/'><div>Under $25</div></a>
                        <a href='/'><div>$25 to $50</div></a>
                        <a href='/'><div>$50 to $100</div></a>
                        <a href='/'><div>$100 to $200</div></a>
                        <a href='/'><div>$200 & Above</div></a>

                        <div className='title'><b>Discount</b></div>                   
                        <a href='/'><div>10% Off or More</div></a>
                        <a href='/'><div>25% Off or More</div></a>
                        <a href='/'><div>50% Off or More</div></a>
                        <a href='/'><div>70% Off or More</div></a>

                        <div className='title'><b>Avg. Customer Review</b></div>                   
                        <a href='/'><div>&#9733;&#9733;&#9733;&#9733;&#9734; & Up</div></a>
                        <a href='/'><div>&#9733;&#9733;&#9733;&#9734;&#9734; & Up</div></a>
                        <a href='/'><div>&#9733;&#9733;&#9734;&#9734;&#9734; & Up</div></a>
                        <a href='/'><div>&#9733;&#9734;&#9734;&#9734;&#9734; & Up</div></a>
                    </div>
                    <div className='right-side'>
                        <DealsGrid />
                    </div>
                </div>
            </Content>
        </Wrapper>
    )
}

export default DealsTable;