import React, { useEffect, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";
import StarRating from "./StarRating";

const RestaurantList = (props) => {
    const { restaurants, setRestaurants } = useContext(RestaurantsContext);
    let history = useHistory();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get("/");
                console.log(response.data.data);
                setRestaurants(response.data.data.restaurants);
            } catch (err) {
                console.log(err)
            }
        };

        fetchData();
    }, []);

    // TODO: complete handleDelete
    const handleDelete = async (e, id) => {
        e.stopPropagation();
        try {

        } catch (err) {
            console.log(err)
        }
    }

    // TODO: complete handleUpdate
    const handleUpdate = (e, id) => {

    }

    // TODO: complete handleRestaurantSelect
    const handleRestaurantSelect = (id) => {

    }

    // TODO: complete return
    return (
        <div></div>
    )
}

export default RestaurantList;