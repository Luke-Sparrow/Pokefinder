import React from 'react';


const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input 
            type='search' 
            className='pa3 ba b--blue bg-light-green tc' 
            placeholder='Enter Pokemon Name!' 
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;