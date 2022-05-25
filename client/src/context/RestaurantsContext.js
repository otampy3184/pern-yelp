import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext();

// レストラン追加用のコンテクスト
export const RestaurantsContextProvider = (props) => {
    const [restaurants, setRestaurants] = useState();
    const [selectedRestaurant, setSelectedRestaurant] = useState();

    const addRestaurants = (restaurant) => {
        // 複数個、もしくは一個のレストランとをState関数で追加
        setRestaurants([...restaurants, restaurant]);
    };
    return (
        <RestaurantsContext.Provider
            value={{
                restaurants,
                setRestaurants,
                addRestaurants,
                selectedRestaurant,
                setSelectedRestaurant,
            }}
        >
            {props.children}
        </RestaurantsContext.Provider>
    )
}