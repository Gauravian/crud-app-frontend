import React, { useState } from 'react'

import { NavLink } from 'react-router-dom';

function Registration() {

  const [passshow, setpassshow] = useState(false);
  const [cpassshow, setcpassshow] = useState(false);

  const users = {
    Name:"",
    email:"",
    password:"",
    cpassword:""

  }
  const [inpval,setinpval]=useState(users);

  console.log(inpval);

  const setval =(e)=>{
    const {name,value}=e.target;
    
    setinpval({...inpval,[name]:value});
  }

  const AdduserData =(e)=>{
    e.preventDefault();

    const {Name,email,password,cpassword} = inpval;

    if(Name === ''){
      alert("Please enter your Name");
    }else if(email === ''){
      alert("Please enter your email");

    }else if(!email.includes('@')){
      alert("Please enter your valid email");
    }else if(password === ''){
      alert("Please enter your password");
    }else if(password.length < 6){
      alert("password must be 6 characters");
    }else if(cpassword === ''){
      alert("Please enter your cpassword");
    }else if(cpassword.length < 6){
      alert("cpassword must be 6 characters");
    }else if(password !== cpassword){
      alert("password and cpassword not match");
    } else{
      console.log("user validation succefully completed !!!");
    }

  }
  

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 shadow-xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Registration in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-start">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="Name"
                  name="Name"
                  onChange={setval}
                  value={inpval.Name}
                  type="Name"
                  required
                  autoComplete="Name"
                  
                  className="block w-full p-2 font-semibold rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-start">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  onChange={setval}
                  value={inpval.email}
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full p-2 font-semibold rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>

              </div>
              <div className="mt-2 flex ">
                <input
                  id="password"
                  name="password"
                  onChange={setval}
                  value={inpval.password}
                  
                  
                  type={!passshow ? "password" : "text"}
                  
                  required
                  autoComplete="current-password"
                  className="block w-full p-2 rounded-r-none rounded-l-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                />
                <div className='btn   border-b-gray-400 rounded-l-none ' onClick={() => setpassshow(!passshow)}>{!passshow ? "show" : "hide"}</div>

              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="cpassword" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>

              </div>
              <div className="mt-2 flex ">
                                <input
                                    id="cpassword"
                                    name="cpassword"
                                    onChange={setval}
                                    value={inpval.cpassword}
                                    type={!cpassshow ? "password" : "text"}
                                    required
                                    autoComplete="current-password"
                                    className="block w-full p-2 rounded-r-none rounded-l-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    
                                />
                                <div className='btn   border-b-gray-400 rounded-l-none ' onClick={()=>setcpassshow(!cpassshow)}>{!cpassshow ? "show" : "hide"}</div>
                                
                            </div>
            </div>

            <div>
              <button
              onClick={AdduserData}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Signup
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already Register{' '}
            
            <NavLink to='/' className="font-semibold underline leading-6 text-indigo-600 hover:text-indigo-500">Login</NavLink>
          </p>
        </div>
      </div>
    </>
  )
}

export default Registration