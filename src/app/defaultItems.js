import logo from './img/logo.jpg';

export function List(){
    return(
        <>
            <div className='navbar-container'>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Prenota</a></li>
                    <li><a href='#'>Calendario</a></li>
                    <li><a href='#'>Chi Sono</a></li>
                </ul>
            </div>
        </>
        
    );
}

export function Logo({size='100px'}){
    return(
        <img src={logo} width={size} height={size} className='entrata-da-destra'/>
    );
}



