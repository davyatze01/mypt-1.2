import placeholder from './img/placeholder.jpg';
import Image from 'next/image';

function imgScroll(scroll){

}

export function Slider(){
    return(
        <>
            <button className='slideImage' onClick={imgScroll("left")}>&lt;</button>
            <Image src={placeholder.src} className='imgSlider' alt="PRova" width={500} height={500}/> 
            <button className='slideImage' onClick={imgScroll("right")}>&gt;</button>
        </>
        

    );     
}