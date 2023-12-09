import React from 'react';

const gradient = {
    background: 'linear-gradient(to right, #7A776B, #11100E) ',
};


const ResearchPaper = () => {
    return (
        <div >
            <h1 className='text-5xl'>Research Paper</h1>

            <div style={gradient} className='text-white'>

                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead className='text-white'>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Res Topics</th>
                                <th>Res center Name</th>
                                <th>Last Login</th>
                                <th>Res paper link</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                </div>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Littel, Schaden and Vandervort</td>
                                <td>Canada</td>
                                <td>12/16/2020</td>
                                <td>Blue</td>
                            </tr>

                            {/* 2 */}

                            <tr>
                                <th>1</th>
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                </div>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Littel, Schaden and Vandervort</td>
                                <td>Canada</td>
                                <td>12/16/2020</td>
                                <td>Blue</td>
                            </tr>
                        </tbody>

                    </table>

                </div>
            </div>

        </div>
    );
};

export default ResearchPaper;