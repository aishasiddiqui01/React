import {RES_LOGO_URL} from '../utils/constants';

const RestaurantCard = ({restauraunt: {avgRating, cuisines, name, sla: {slaString}, cloudinaryImageId}}) => {
    return(
        <div className='restraunt-card'> 
            <img className='restraunt-logo' src={RES_LOGO_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating + '🎖️'}</h4>
            <h4>{slaString}</h4>
        </div>
    );
};

export default RestaurantCard;