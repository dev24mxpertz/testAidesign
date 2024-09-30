import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PopularEpisodes = () => {
    const [showMore, setShowMore] = useState(false);

    const episodes = [
        {
            id: 1,
            title: 'ABC Podcast 33: Live',
            guest: 'Persoo Name',
            pageRout: '/dashboard'
        },
        {
            id: 2,
            title: 'ABC Podcast 33. Live',
            guest: 'Guest Person Name',
            pageRout: '/dashboard'
        },
        {
            id: 3,
            title: 'ABC Podcast 33: Live',
            guest: 'Guest Person Name',
            pageRout: '/dashboard'
        },
        {
            id: 4,
            title: 'ABC Podcast 33: Live',
            guest: 'Guest Person Name',
            pageRout: '/dashboard'
        },
        {
            id: 5,
            title: 'ABC Podcast 33: Live',
            guest: 'Guest Person Name',
            pageRout: '/dashboard'
        },
        {
            id: 6,
            title: 'ABC Podcast 33: Live',
            guest: 'Guest Person Name',
            pageRout: '/'
        },
    ];

    const handleSeeMore = () => {
        setShowMore(!showMore);
    }

    return (
        <div className="col-12 popular-episodes">
            <div className='my-3'>

                <h2>Popular Episodes</h2>
                <button onClick={handleSeeMore} className="btn btn-transparent">
                    {showMore ? 'See Less' : 'See All'}
                </button>
            </div>
            <div className='col-12 popular-episodes-list'>
                <ul className="list-group mb-3">
                    {episodes.slice(0, showMore ? episodes.length : 3).map((episode) => (

                        <li key={episode.id} style={{borderColor:'#000'}} className="list-group-item list-group-item-action text-whit bg-transparent">
                            <Link to={episode.pageRout} key={episode.id}>
                                <Avatar style={{backgroundColor:'#8c90e5',color:'#000',border:'1px solid #000'}} size={50} icon={<UserOutlined />} />
                                <div>
                                    <h1>{episode.title}</h1>
                                    <span className="">Guest: {episode.guest}</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PopularEpisodes;
