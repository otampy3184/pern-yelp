require('dotenv').config(); 
const express = require('express')
const cors = require("cors");
const db = require("./db");

const morgan = require("morgan");

const app = express();

// オリジン間リソース共有ソース
app.use(cors());
// json用のミドルウェア
app.use(express.json());

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
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params);

    res.status(200).json({
        status: "success",
        data: {
            restaurant: "sukiya"
        }
    })
})

// restaurant作成（サンプル）
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req);
    res.status(200).json({
        status: "success",
        data: {
            restaurant: "sukiya"
        }
    })
    res.status(200).json({
        status: "success",
        data: {
            restaurant: "sukiya"
        }
    })
})

// restaurant更新（サンプル）
app.post("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
})

// restaurant削除（サンプル）
app.delete("/api/v1/restaurants/:id", (req, res) => {
    res.status(204).json({
        status: "sucess"
    })
})

app.listen(port, () => {
    console.log(`server start on port ${port}`);
})