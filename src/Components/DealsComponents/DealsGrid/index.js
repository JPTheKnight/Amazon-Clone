import React from 'react';

import { Wrapper, Content } from './DealsGrid.styles';

import laptops from '../../../Images/GridImages/laptop.png';
import mouse from '../../../Images/GridImages/mouse.png';
import keyboard from '../../../Images/GridImages/keyboard.png';
import headphones from '../../../Images/GridImages/headphones.png';
import pc from '../../../Images/GridImages/pc.png';
import screen from '../../../Images/GridImages/screen.png';
import joystick from '../../../Images/GridImages/joystick.png';
import console from '../../../Images/GridImages/console.png';
import NormalCell from './cell';

const DealsGrid = () => {

    return (
        <Wrapper>
            <Content>
                <NormalCell id={12311} name='Laptop' num_left='2' dotd={true} price={1059.99} oldprice='$1,199.99' percentage='(12% off)' comp='Acer Gaming Laptops' rating_stars={4} rating='3969' imgsrc={laptops} />
                <NormalCell id={12322} name='Mouse' num_left='5' dotd={true} price={749.99} oldprice='$899.99' percentage='(12% off)' comp='Acer Gaming Mouse' rating_stars={3} rating='39690' imgsrc={mouse} />
                <NormalCell id={12333} name='Keyboard' num_left='21' dotd={true} price={749.99} oldprice='$899.99' percentage='(12% off)' comp='Acer Gaming Keyboard' rating_stars={2} rating='590' imgsrc={keyboard} />
                <NormalCell id={12344} name='Headphones' num_left='25' dotd={true} price={419.99} oldprice='$599.99' percentage='(20% off)' comp='Acer Gaming Headphones' rating_stars={1} rating='4085' imgsrc={headphones} />
                <NormalCell id={12355} name='PC' num_left='8' dotd={false} price={5559.99} oldprice='' percentage='' comp='Acer Gaming PCs' rating_stars={5} rating='3969' imgsrc={pc} />
                <NormalCell id={12366} name='Joystick' num_left='4' dotd={false} price={559.99} oldprice='$699.99' percentage='(10% off)' comp='Acer Gaming Joysticks' rating_stars={2} rating='3969' imgsrc={joystick} />
                <NormalCell id={12377} name='Screen' num_left='6' dotd={false} price={2559.99} oldprice='' percentage='' comp='Acer Gaming Screen' rating_stars={4} rating='31763' imgsrc={screen} />
                <NormalCell id={12388} name='Console' num_left='7' dotd={false} price={859.99} oldprice='' percentage='' comp='Acer Gaming Consoles' rating_stars={3} rating='5569' imgsrc={console} />
            </Content>
        </Wrapper>
    )
}

export default DealsGrid;