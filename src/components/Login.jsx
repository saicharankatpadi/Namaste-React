import React, { useState } from 'react'
import Header from './Header'

const Login = () => {


    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
         <Header/>
    <div>
    
        <img src="
https://assets.nflxext.com/ffe/siteui/vlv3/e49aba81-ee7c-4f19-baef-7c54bbab003e/web/IN-en-20260202-TRIFECTA-perspective_04f5de39-b518-493c-9a8d-6aef11af0457_small.jpg"
        alt="netflix-login" className='absolute w-full h-screen object-cover'/>
    </div>

    <form className="absolute w-3/12 right-8  text-white left-8 mx-auto p-12 my-36 bg-black bg-opacity-70">
        <h1 className="text-3xl font-bold mb-8">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
         {!isSignInForm && (
            <input type="text" className="p-4 my-4 bg-gray-700  w-full text-white rounded-lg" placeholder="Full Name"/>
         )}
        <input type="text" className="p-4 my-4 bg-gray-700  w-full text-white rounded-lg" placeholder="Email or phone number"/>
        
        <input type="password" className="p-4 my-4 bg-gray-700 w-full  text-white rounded-lg" placeholder="Password"/>
        <button className="bg-red-600 p-3 my-6 rounded-lg w-full font-bold">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up now." : "Already have an account? Sign In now."}</p>
    </form>
    </div>
  )
}

export default Login