import React from 'react';

const CollegeDetailsResearchHistory = ({researchItem}) => {
    
    return (
        <>  <tr>
             
                <td ><span className='text-semi-bold'>{researchItem.title}</span></td>
                {/* <td>{researchItem.author}</td> */}
                <td className='text-semi-bold'>{researchItem.year}</td>
            </tr></>
          
       
    );
};

export default CollegeDetailsResearchHistory;