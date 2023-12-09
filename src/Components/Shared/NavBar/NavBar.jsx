import React, { useContext, useState } from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const NavBar = () => {
    let [clicked, setClicked]= useState(false);

    const IconClicked = () => {
       setClicked(!clicked);

    }
    const {logOut, user} = useContext(AuthContext);
    const handleLogOut = () => {
      logOut()
        .then(() => { })
        .catch(error => console.log(error))
    }

  


    return (
       <>
       <nav>
        {/* logo */}
        <a href=''><img src={Logo}  style={{ height: '50px' }} alt="" srcset="" /></a>

        <div className=''>
            <ul id='navbar' className={clicked ? '#navbar active' : "#navbar"}>
                <li>
                   <Link to='/'> <a className='active' href="">Home</a></Link>
                </li>

                <li>
                    <Link to='mycollege'> <a href="">My College</a></Link>
                </li>
                <li>
                    <a href="">Sections</a>
                </li>

                <li>
                    <Link to='colleges'> <a href="">Colleges</a></Link>
                </li>
                <li>
                    <Link to='admission'> <a href="">Admission</a></Link>
                </li>
                <li className="flex items-center space-x-2">
              {/* dashboard */}
              {/* <Link to='/dashboard/counter'><a href="#" className="hover:text-white">Dashboard</a></Link> */}
              <img
                src={user?.photoURL}
                alt="User Profile"
                className="w-8 h-8 rounded-full"
                // title={user?.displayName}
              />
               </li>
               {
      user ? <>

        <button onClick={handleLogOut} className='btn btn-primary'>LogOut</button>
      </> : <>
        <li><Link to='/login'>Login</Link></li>
      </>
    }
            </ul>
        </div>

        {/* for smaller screen // mobile responsive */}

            <div id='mobile' onClick={IconClicked}>
              {
                 clicked ? (
                    <i>
                      <FontAwesomeIcon icon={faTimes} />
                    </i>
                  ) : (
                    <i>
                      <FontAwesomeIcon icon={faBars} />
                    </i>
                  )
              }
         
            </div>

       </nav>
       </>
    );
};

export default NavBar;