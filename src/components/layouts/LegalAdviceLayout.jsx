import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const LagalAdviceLayout = () => {
    return (
        <div className='LegalAdviceLayout'>
            <h2>Legal Advice</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores 
                minus et magnam necessitatibus maxime modi facilis rerum excepturi! Perferendis, 
                
            </p>
            <nav>
                <NavLink to="advice">View the Legal Advice</NavLink>
                <NavLink to="question">Your Question?</NavLink>
            </nav>

            <Outlet/>
        </div>
    );
};

export default LagalAdviceLayout;