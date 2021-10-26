import React from 'react';

import { Wrapper, Content, Image } from './BigAdImage.styles';

import bg_ad_image_1 from '../../Images/bg-ad-image-1.jpg';
import bg_ad_image_2 from '../../Images/bg-ad-image-2.jpg';
import bg_ad_image_3 from '../../Images/bg-ad-image-3.jpg';
import bg_ad_image_4 from '../../Images/bg-ad-image-4.jpg';
import bg_ad_image_5 from '../../Images/bg-ad-image-5.jpg';
import bg_ad_image_6 from '../../Images/bg-ad-image-6.jpg';
import arrow_back from '../../Images/arrow-back.png';
import arrow_next from '../../Images/arrow-next.png';

const BigAdImage = () => {

    var counter = 1;

    const nextButt = () => {
        if (counter >= 7) 
        {
            counter = 0;
            for (let i=0; i < document.getElementsByClassName('slide').length; i++)
            {
                document.getElementsByClassName('slide')[i].style.transform = "translate(" + (Math.abs(counter) * -document.getElementsByClassName('slide')[i].clientWidth) + "px)";
                document.getElementsByClassName('slide')[i].style.transition = "none";
            }
            counter = 1;
        }
        for (let i=0; i < document.getElementsByClassName('slide').length; i++)
        {
            document.getElementsByClassName('slide')[i].style.transform = "translate(" + (Math.abs(counter) * -document.getElementsByClassName('slide')[i].clientWidth) + "px)";
            document.getElementsByClassName('slide')[i].style.transition = "all 1s ease-in";
        }
        counter++;
    }

    const backButt = () => {
        if (counter < 1)
        {
            counter = 6;
            for (let i=0; i < document.getElementsByClassName('slide').length; i++)
            {
                document.getElementsByClassName('slide')[i].style.transform = "translate(" + (Math.abs(counter) * -document.getElementsByClassName('slide')[i].clientWidth) + "px)";
                document.getElementsByClassName('slide')[i].style.transition = "none";
            }
        }
        counter--;
        for (let i=0; i < document.getElementsByClassName('slide').length; i++)
        {
            document.getElementsByClassName('slide')[i].style.transform = "translate(" + (Math.abs(counter) * -document.getElementsByClassName('slide')[i].clientWidth) + "px)";
            document.getElementsByClassName('slide')[i].style.transition = "all 1s ease-in";
        }
    }

    return (
        <Wrapper>
            <Content>
                <div className='container'>
                    <div className='slider'>
                        <div className='slide'><Image src={bg_ad_image_1}/></div>
                        <div className='slide'><Image src={bg_ad_image_2}/></div>
                        <div className='slide'><Image src={bg_ad_image_3}/></div>
                        <div className='slide'><Image src={bg_ad_image_4}/></div>
                        <div className='slide'><Image src={bg_ad_image_5}/></div>
                        <div className='slide'><Image src={bg_ad_image_6}/></div>
                        <div className='slide'><Image src={bg_ad_image_1}/></div>
                    </div>
                    <img alt=''  className='back' src={arrow_back} height='255px' onClick={backButt}/>
                    <img alt=''  className='next' src={arrow_next} height='255px' onClick={nextButt}/>
                </div>
            </Content>
        </Wrapper>
    )
}

export default BigAdImage;