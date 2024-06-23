import React from 'react' ;
import { useLoaderData, useParams } from 'react-router-dom' ;

export default function CasesDetails() {
  const { id } = useParams()
  const cases = useLoaderData()

    return (
        <div className='Cases-Details'>
              <h2>Case Details for {cases.name}</h2>
              <p>Email id is :{cases.email}</p>
        </div>
    )
}

// Loader Function 

export const CasesDetailsLoader = async({ params}) => {
   const { id } = params
   const res = await fetch ('https://jsonplaceholder.typicode.com/comments/' + id)
   if(!res.ok) {
     throw Error('Could not find that case')
   }
   return res.json()

}


