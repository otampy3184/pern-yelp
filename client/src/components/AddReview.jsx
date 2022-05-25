import React, { useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { useLocation, useParams, useHistory } from "react-router-dom";

const AddReview = () => {
    const { id } = useParams();
    const location = useLocation();
    console.log(location);
    const history = useHistory();
    console.log(id);
  
    const [name, setName] = useState("");
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState("Rating");

    const handleSubmitReview = (e) => {
        e.preventDefault();
        try {

        } catch (err){
            console.log(err);
        }
    };
    return (
        <div></div>
    )
}