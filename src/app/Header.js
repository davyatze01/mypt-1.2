"use client";

import { useState } from 'react';

export default function Header(){

    const [clicked,setClicked] = useState(false);

    //FUNZIONE CLICK MENU
    function menuClick (){
        const listLi = document.querySelectorAll("ul > li");
        const iconMenu = document.getElementById("dropDownMenu");
        
            if(clicked){
                listLi.forEach((item) => {
                    item.classList.add('rimuovi-menu');
                    item.classList.remove('entrata-menu');
                });
                iconMenu.classList.add('rotate-menu-icon-normal');
                iconMenu.classList.remove('rotate-menu-icon');
            }else{
                listLi.forEach((item) => {
                    item.classList.remove('rimuovi-menu');
                    item.classList.add('entrata-menu');
                });
                iconMenu.classList.remove('rotate-menu-icon-normal');
                iconMenu.classList.add('rotate-menu-icon');
            }
            
        

        
        setClicked(!clicked);
    }
    return(
        <>
            <header>
                <h1 id='title-home'>MY PERSONAL TRAINER</h1>
            </header>
        </>
    );
    
}