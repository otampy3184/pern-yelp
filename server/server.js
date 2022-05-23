require('dotenv').config(); 
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

// restaurant取得Route（サンプル）
app.get("/getRestaurants", (req, res) => {
    res.status(404).json({
        status: "success",
        restaurant: "yoshinoya"
    })})

app.listen(port, () => {
    console.log(`server start on port ${port}`);
})