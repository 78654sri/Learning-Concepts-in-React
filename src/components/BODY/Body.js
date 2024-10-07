
import "./Body.css"; 
import React from 'react';
import Shimmer from "../Shimmer/Shimmer";
import { Restro } from "./Restro";
import { useEffect, useState } from "react";

export const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredrestra , setFilteredrestra] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
        
        const restaurants = json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setResList(restaurants);
        setFilteredrestra(restaurants);
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
  };

  if(resList.length === 0){
    return <Shimmer />
  }

  return (
    <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="inti" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <button className="btn" onClick={() => {
              const filteredRestra = resList.filter((resData) => resData.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredrestra(filteredRestra);
            }}>
              Search
            </button>
          </div>
          <button className="filter-btn" onClick={() => {
              const filteredList = resList.filter((res) => res.restaurants.info.avgRating > 4);
              setResList(filteredList);
          }}>
            Top Rated Restaurants
          </button>
        </div>
        <div className="Container">
          {resList.length > 0 ? (
              filteredrestra.map((restaurant) => (
                  <Restro key={restaurant.info.id} resData={restaurant} />
              ))
          ) : (
              <div>No restaurants found</div>
          )}
        </div>
    </div>
  );
};
