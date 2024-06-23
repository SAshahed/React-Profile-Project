import React from 'react';
import { Outlet } from 'react-router-dom';

const CasesLayout = () => {
    return (
        <div className='casesLayout'>
            <h2>Cases</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum, 
                eum nisi ea minus sint nostrum inventore nulla quidem numquam delectus est consequatur 
                voluptatum qui perspiciatis dolore? Molestias, quasi nisi?</p>
            <Outlet/>

            
        </div>
    );
};

export default CasesLayout;