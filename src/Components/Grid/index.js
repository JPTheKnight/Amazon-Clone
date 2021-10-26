import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Content, Cell } from './Grid.styles';
import NormalCell from './normalCell';
import AnormalCell from './anormalCell';
import { useStateValue } from '../../StateProvider';

const Grid = () => {

    const [{user}] = useStateValue();

    return (
        <Wrapper>
            <Content>
                <NormalCell title='Amazon Basics' link='See more' imgsrc='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg' />
                <NormalCell title='Easy returns' link='Learn More' imgsrc='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg' />
                <NormalCell title='Get fit at home' link='Explore now' imgsrc='https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg' />
                {!user ? <Cell className='signin'>
                    <div className='signin-title'>
                        <p>
                            <span><b>Sign in for the best</b></span><span><b>experience</b></span>
                        </p>
                    </div>
                    <div className='signin-button'><Link to='/sign-in'><button>Sign in securely</button></Link></div>
                    <div className='amazon-ships'><img alt='' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg'/></div>
                </Cell>:<NormalCell title='Deals & Promotions' link='Shop now' imgsrc='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg' />}
                <NormalCell title='Oculus' link='Shop now' imgsrc='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg' />
                <NormalCell title='Computers & Accessories' link='Shop now' imgsrc='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg' />
                <AnormalCell title='Gaming accessories' link='Explore now' imgsrc={['https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg']} products = {['Headsets', 'Keyboards', 'Computer mice', 'Chairs']} />
                <AnormalCell title='Shop by Category' link='Shop now' imgsrc={['https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg']} products = {['Computers & Accessories', 'Video Games', 'Baby', 'Toys & Games']} />
                <AnormalCell title='Comfy styles for her' link='See more' imgsrc={['https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Sweatshirt_Quad_Cat_1x._SY116_CB418609101_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Joggers_Quad_Cat_1x._SY116_CB418608748_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Cardigans_Quad_Cat_1x._SY116_CB418608722_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Tees_Quad_Cat_1x._SY116_CB418608878_.jpg']} products = {['Sweatshirts', 'Joggers', 'Cardigans', 'Easy tees']} />
                <NormalCell title='Shop Laptops & Tablets' link='See more' imgsrc='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg' />
                <NormalCell title='Explore home bedding' link='See more' imgsrc='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg' />
                <AnormalCell title='Comfy styles for her' link='See more' imgsrc={['https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Apparel_1x._SY116_CB667159060_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Hat_1x._SY116_CB667159060_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Figure_1x._SY116_CB667159060_.jpg',
                            'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_1x._SY116_CB667159063_.jpg']} products = {['Apparel', 'Hats', 'Action figures', 'Mugs']} />
            </Content>
        </Wrapper>
    )
}

export default Grid;