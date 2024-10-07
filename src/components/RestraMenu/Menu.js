import React, { useEffect ,useState} from 'react'
import Shimmer from '../Shimmer/Shimmer';


const Menu = () => {
    
   const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu()

    },[])

    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        setResInfo(json.data)
    }
  if (resInfo === null) return <Shimmer />

  return (
    <div className='menu'>
        <h1>{resInfo?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[1]?.info?.name}</h1>
    </div>
  )
}

export default Menu;