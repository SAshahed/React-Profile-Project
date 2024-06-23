
import React from 'react';
import { Form, redirect, useActionData } from 'react-router-dom';

export default function Question () {
    const data = useActionData()
    return (
        <div className='Question'>
            <h1>Question any Legal Topic </h1>
            <Form method='post' action='/legalAdvice/question'>
                <label>
                    <span>Your Name Please:</span>
                    <input type='text' name='FullName' required />
                </label>
                <label>
                    <span>Your Email:</span>
                    <input type='email' name='email' required />
                </label>
                <label>
                    <span>Your Question ?</span>
                    <textarea name='message' required></textarea> 
                </label>
                <button>Submit Your Question</button>

                {data && data.error && <p>{data.error}</p>}
            </Form>
            
        </div>
    );
};


export const questionAction = async ({ request}) => {
 console.log(request)

 const data = await request.formData()

 const submisson ={
    email: data.get('email'),
    message: data.get('message')
 }
 console.log(submisson)

 // send post request 

 if (submisson.message.length < 10) {
    return { error: 'Message must be over 10 Chars long'}
 }
 // redirect the user 
 return redirect('/')
}