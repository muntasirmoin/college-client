import React from 'react';
import NavBar from '../../Components/Shared/NavBar/NavBar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../Components/Shared/Footer/Footer';


const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup') || location.pathname.includes('forgetpassword');
    return (
        <div>
            {noHeaderFooter || <NavBar></NavBar>}
           <Outlet></Outlet>
           {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;