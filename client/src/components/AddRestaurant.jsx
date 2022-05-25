import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";

const RestaurantList = (props) => {
    const {restaurants, setRestaurants } = useContext(RestaurantsContext);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("Price Range");
    
    // TODO: complete handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
        } catch (err){
            console.log(err);
        }
    };
    // TODO: complete return
    return (
        <div></div>
    );
};

export default RestaurantList;