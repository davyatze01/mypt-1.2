import placeholder from './img/placeholder.jpg';
import Image from 'next/image';

export function Slider(){
    return(
            <div className='main-article'>
                <Image src={placeholder.src} alt="PRova" width={500} height={500}/> 
            </div>
    );     
}