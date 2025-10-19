import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RighAside from '../components/homelayout/RighAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const [news, setNews] = useState({})
    console.log(id, data)

    useEffect(() => {
        const newsDetails = data.find((singNews) => singNews.id == id);
        setNews(newsDetails)
    }, [data, id])

    return (
        <div >
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 py-5 gap-5'>
                <section className='col-span-9'>
                    <h2 className='font-bold text-xl'>Dragon News</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RighAside></RighAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;