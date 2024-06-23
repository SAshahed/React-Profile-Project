import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavLink,Outlet} from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs';
 

function MasterLayout() {
    return (
             <div className='masterlayout'>
                <header>
                 <nav>
                  <h1> Layer Profile </h1>
                   <NavLink to="/">Home </NavLink>
                   <NavLink to="about">About</NavLink>
                   <NavLink to="cases">Case History</NavLink>
                   <NavLink to="legalAdvice">Legal Advice</NavLink>
                 </nav>
                 <Breadcrumbs/>
                </header> 
                 <main>
            
                    <Outlet/>
        
                 </main>
             
                </div>
            )
        }

export default MasterLayout;


