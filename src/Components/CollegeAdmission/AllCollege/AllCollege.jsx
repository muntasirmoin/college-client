import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Colleges from '../../Pages/Colleges/Colleges';

const AllCollege = () => {
    return (
        <>
            <Helmet>
                <title> College || Colleges</title>
            </Helmet>

            <div>
               <Colleges></Colleges>
            </div>
        </>
    );
};

export default AllCollege;