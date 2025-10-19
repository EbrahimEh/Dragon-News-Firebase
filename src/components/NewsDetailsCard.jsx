import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news)
    return (
        <div className='space-y-5'>
            <h2 className='text-2xl font-semibold pt-5'>{news.title}</h2>
            <img className='py-3 h-[400px] w-full' src={news.image_url} alt="" />
            <p>{news.details}</p>

            <Link className='btn btn-secondary' to={`/category/${news.category_id}`}>All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;