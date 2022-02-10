import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='BannerBg pt-40 pb-64'>
            <div className='text-center'>
                <h1 className="text-4xl font-semibold pb-5">Best food waiting for your belly</h1>
                <input type="search" name="" id="" placeholder='Search food item' />
                <button>Search</button>
            </div>
        </div>
    );
};

export default Banner;