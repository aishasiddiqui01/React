import {useEffect, useState} from 'react';
import RestaurantCard from './RestaurantCard';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() => {
        getRestaurantData();
    }, [])

    const getRestaurantData = async() => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.900797&lng=80.973559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const jsonData = await data.json();
        setListOfRestaurants(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    return (
        <div className='body'>
           <div className='filter-restaurants'>
                <button className='filter-res-btn' onClick={() => setListOfRestaurants(listOfRestaurants.filter(res => res.info.avgRating >= 4.5))}>Top Rated Restaurants</button>
           </div>
            <div className='search'>Search</div>
            <div className='restraunt-container'>
                {listOfRestaurants.map(res => <RestaurantCard key={res.info.id} restauraunt={res.info}/>)}
            </div>
        </div>
    );
};

export default Body;