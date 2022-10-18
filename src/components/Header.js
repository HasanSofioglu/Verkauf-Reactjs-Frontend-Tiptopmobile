import React from 'react'
import '../modern.css';
import ttlogo from "../assets/ttmlogo.png";

export const Header = () => {
  return (
   
        
        <div id='blurry-filter'>
         <header>
        <div>
            <article id="title"><span className='parent'>Verkauf</span><br/><span className='name'>       <img src = {ttlogo} width="250" alt='dhl logo' ></img></span></article>
          <article id='reference'><a href="" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg></a>
          </article>
        </div> 
        </header>
    </div>
  )
}
