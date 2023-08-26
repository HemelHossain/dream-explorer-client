import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi"
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import {image4} from '../../Assets/ImageJsx/Image'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const {users, logOut } = useContext(AuthContext);

    const handleLogOut =() =>{
        logOut()
        .then(() =>{})
        .catch(error => console.error(error));
    }
    const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header?.classList.add('white-bg');
    } else {
        header?.classList.remove('white-bg');
    }
});
                //   Header Menu 
                
    const menu = <>
                   <Link className='hover-color font-bold hover:md:px-5 block mb-2' to='/'>Home</Link>                    {
                        users?.uid? 
                        <>
                            <Link className='block mb-2 hover:md:px-5 sm:p-0 hover-color' to='/orders'>My Orders</Link>
                            <Link className='block mb-2 hover:md:px-5 hover-color' to='/allOrders'>Manage Orders</Link>
                            <Link className='block mb-2 hover:md:px-5 hover-color' to='/addservice'>Add Service</Link>
                            <Link className='mb-2 flex items-center md:text-sm'><img className='rounded-full w-7 h-7 md:mr-1' src={users.photoURL} alt="" /><span className='hover:md:px-5 hover-color'>{users.displayName}</span></Link>
                            <Link onClick={handleLogOut} className='block hover:md:px-5 hover-color mb-2'>Log out</Link>
                        </>
                        : 
                        <>
                            <Link to='signup' className='hover:md:px-5 hover-color block mb-2'>Sign up</Link>     
                            <Link to='login' className='hover:md:px-5 hover-color block mb-2'>Log in</Link>
                        </>
                    }
                 </>

    return (
        <div>
            <nav className='header fixed text-black top-0 right-0 left-0 z-50 p-4 md:px-24'>
                <div className='flex container justify-between items-center mx-auto'>
                    <div>
                        <img className='w-40 h-10' src={image4} alt="" />
                    </div>
                    <div className='hidden md:flex lg:text-base md:text-sm md:space-x-4'>
                       {menu}
                    </div>
                    <div className='md:hidden cursor-pointer' onClick={() =>{
                        setIsMobileMenuOpen(!isMobileMenuOpen);
                    }}>
                        {
                            isMobileMenuOpen? <HiOutlineX className='w-6 h-7' /> : <HiMenuAlt3 className='w-6 h-7' />
                        }
                    </div>
                    {
                        isMobileMenuOpen && (
                            <div className='text-black bg-white md:hidden absolute w-full top-full  left-0 px-4 pb-4 '>
                               {menu}     
                                  
                            </div>
                        )
                    }

                </div>
            </nav>
            
            <div className='md:hidden'>
            {
                isMobileMenuOpen? <div className='h-44'></div> : <div className='h-0'></div>
            }
            </div>
            
        </div>
    );
};

export default Header;