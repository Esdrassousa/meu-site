import React, { useState } from 'react'
import  {Link} from 'react-router-dom'
import Menu from '../menu'
import './style.css'
import whats from  "../../image/whats.png"
export default function Logon(){
    return(

      
      
        <div className='inicio'>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css"></link>
             <div className="menu_e_Logo">
         
            <Menu></Menu>
            <div className="whatsapp">
               
                <div className="vertical">
                  
                  
                  <a class="whatsapp-link" href="https://api.whatsapp.com/send?phone=5544999776693" target="_blank">
		                <i class="fa fa-whatsapp"></i>
	                </a>
                </div>

              </div>

        
            <div className='apresentacao'>
            <p>
              Projetos elétricos ovide a valid, 
              navigable address as the href value. 
              If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https
            </p>
          </div>
            </div>
          
          
        </div>
    )
}