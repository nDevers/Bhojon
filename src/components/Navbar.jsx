import React from 'react';
import {Link} from 'react-scroll'







function Navbar(props) {
  return (
    <div className='fixed top-0 right-0 z-50'>
      <div className='flex justify-between items-center'>
        <div className='text-3xl text-purple-600 p-2 cursor-pointer'>LOGO</div>
        <div className=''>
          <ul className='flex gap-4 p-2'>
            <li className='text-lg cursor-pointer'><Link to='hero' smooth={true} duration={500}>Home</Link></li>
            <li className='text-lg cursor-pointer'><Link to='features' smooth={true} duration={500}>Features</Link></li>
            <li className='text-lg cursor-pointer'><Link to='hero' smooth={true} duration={500}>Services</Link></li>
            <li className='text-lg cursor-pointer'><Link to='hero' smooth={true} duration={500}>About</Link></li>
            <li className='text-lg cursor-pointer'><Link to='hero' smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;