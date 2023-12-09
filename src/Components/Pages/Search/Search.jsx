import React, { useState } from 'react';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        // console.log(searchQuery);
    };

    return (
        <div>
            <div className='mt-2'>
                <input
                    type="text"
                    placeholder="Search for a college"
                    value={searchQuery}
                    onChange={handleSearch}

                    style={{
                        height: '30px',
                        width: '250px',

                        padding: '5px',
                        border: '1px solid #000',
                        borderRadius: '4px',
                        fontSize: '18px',
                    }}
                />
            </div>

            

           
        </div>
    );
};

export default Search;