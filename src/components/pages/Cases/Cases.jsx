import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

export default function Cases()  {
    const cases = useLoaderData()

    return (
        <div className='cases'>
           { cases.map( cases => (
            <Link to={cases.id.toString()} key={cases.id}>
                <p>{cases.name}</p>
                <p> {cases.email}</p>
                <p> {cases.body}</p>
               {/*  <p> Today's Order {cases.order}</p>
                <p> Next Date {cases.nextdate}</p> */}
            
            </Link>

           )  
           )
           }
 
           
        </div>
    )
}

//Loader function 

 export const casesLoader= async ()=>  {
    // const res = await fetch('http://localhost:4000/cases')
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    
    if(!res.ok) {
        throw Error('Could not find fetch server')
      }
    
    return res.json()
}