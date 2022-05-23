require('dotenv').config(); 
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

// restaurant取得Route（サンプル）
app.get("/api/getRestaurants", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            restaurant: ["yoshinoya", "sukiya", "matsuya"]
        }
    })})

app.listen(port, () => {
    console.log(`server start on port ${port}`);
})