import {useState} from 'react';
import RestaurantCard from './RestaurantCard';
import {resData} from '../utils/resData';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resData);

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