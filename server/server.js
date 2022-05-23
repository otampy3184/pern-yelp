require('dotenv').config(); 
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

// restaurant取得Route（サンプル）
app.get("/api/v1/restaurants", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            restaurant: ["yoshinoya", "sukiya", "matsuya"]
        }
    })})

// restaurant単一取得（サンプル）
app.get("/api/v1/restaurants/:restaurantid", (req, res) => {
    console.log(req.params);
})

// restaurant作成（サンプル）
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req);
})

app.listen(port, () => {
    console.log(`server start on port ${port}`);
})