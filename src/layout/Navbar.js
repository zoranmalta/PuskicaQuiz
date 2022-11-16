import React from 'react';
import '../style/Navbar.css';

function Navbar() {
	return (
		<div className='navbar'>
			<div className='active'> Home</div>
			<div className=' text-orange-300  '>Search</div>
			<div> Contact</div>
			<div> Login</div>
		</div>
	);
}

export default Navbar;
