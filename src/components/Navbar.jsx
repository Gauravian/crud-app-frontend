import React from 'react'
import photo from '../../public/devloper.jpg'


function Navbar() {
  return (
    <>
    <div className='shadow-xl '>
    <div className="navbar bg-base-100 ">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Login Page </a>
  </div>
  <div className="flex-none">
    
    
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          
        
          <img
            alt="Tailwind CSS Navbar component"
            src={photo} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Navbar