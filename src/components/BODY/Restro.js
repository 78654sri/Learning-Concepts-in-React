import "./Restro.css";
import React from 'react';
export const Restro = (props) => {
    const { resData } = props;

    const {cloudinaryImageId,name,avgRating,cuisines,deliveryTime} = resData?.info;

    return (
        <div className="res-card">
            <img 
                className="res-logo" 
                alt={resData.info.name} 
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
            />
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} min</h4>
        </div>
    );
};
