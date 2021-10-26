import React, {useState, useEffect} from 'react';
import { useStateValue } from '../../../StateProvider';

import { Cell } from './LeftSide.styles';

const NormalCell = ({id, title, imgsrc, number, ship_loc, price, gift_av}) => {
    
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const [{basket}, setBasket] = useStateValue();
    const [addingItem, setAddingItem] = useState(false);
    const [selectItem, setSelectItem] = useState(false);

    console.log(basket);

    const deleteItem = () => {
        if (!addingItem)
        {
            setBasket({
                type: 'remove_from_basket',
                id: id,
                index: basket.indexOf(basket.find(i => i.id===id))
            });
        }
        setAddingItem(true);
    }

    const deselectItem = () => {
        if (!selectItem)
        {
            if (!document.getElementsByClassName('checkbox-input')[basket.indexOf(basket.find(i => i.id===id))].checked)
            {
                setBasket({
                    type: 'deselect_item',
                    id: id,
                    index: basket.indexOf(basket.find(i => i.id===id))
                });
            }
            else
            {
                setBasket({
                    type: 'select_item',
                    id: id,
                    index: basket.indexOf(basket.find(i => i.id===id))
                });
            }
            setSelectItem(true);
        }
    }

    useEffect(() => {
        document.getElementsByClassName('checkbox-input')[basket.indexOf(basket.find(i => i.id===id))].checked = true;
    }, [])

    useEffect(() => {
        return () => {
            setTimeout(setAddingItem(false), 3000);
        }
    }, [addingItem])

    useEffect(() => {
        return () => {
            setTimeout(setSelectItem(false), 3000);
        }
    }, [selectItem])

    return (
        <Cell>
            <div className='item'>
                <div className='checkbox'><input type='checkbox' className='checkbox-input' onClick={deselectItem}/></div>
                <div><img alt=''  src={imgsrc} /></div>
                <div className='infos'>
                    <div className='product-name'>{title}</div>
                    <div className='number-in-stock'>Only {number} left in stock - order soon.</div>
                    <div className='shipped-from'>Shipped from: <a href='/'>{ship_loc}</a></div>
                    {!gift_av && <div className='gift-options'>Gift options not available. <a href='/'>Learn more</a></div>}
                    <div className='options'>
                        <span><a href='/'>DropDown</a></span>
                        <span onClick={deleteItem} className='delete'>Delete</span>
                        <span><a href='/'>Save for later</a></span>
                        <span><a href='/'>Compare with similar items</a></span>
                    </div>
                </div>
                <div className='price'><b>${numberWithCommas(price)}</b></div>
            </div>
            <hr/>
        </Cell>
    );
}

export default NormalCell;