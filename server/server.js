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
app.get("/api/v1/restaurants", async (req, res) => {
    try {
        // 秘伝のSQLでレストラン情報を全件取得
        const queryResult = await db.query(
            "select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id;"
        );
        res.status(200).json({
            status: "success",
            result: queryResult.rows.length,
            data: {
                restaurant: queryResult.rows,
            }
        })
    } catch (err) {
        console.log(err);
    }
})

// restaurant単一取得（サンプル）
app.get("/api/v1/restaurants/:id", async (req, res) => {
    console.log(req.params);

    try {
        // 秘伝のSQLでレストラン情報を全件取得
        const restaurant = await db.query(
            "select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1",
            [req.params.id]
        );

        // 秘伝のSQLでレビューを取得
        const reviews = await db.query(
            "select * from reviews where restaurant_id = $1",
            [req.params.id]  
        );
        console.log(reviews);

        res.status(200).json({
            status: "success",
            data: {
                restaurant: restaurant.rows[0],
                reviews: reviews.rows
            }
        })
    } catch (err) {
        console.log(err);
    }


})

// restaurant作成（サンプル）
app.post("/api/v1/restaurants", async (req, res) => {
    console.log(req);

    try {
        // 秘伝のSQLでインサート
        const results = await db.query(
            "INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *",
            [req.body.name, req.body.location, req.body.price_range]
          );       
        res.status(201).json({
            status: "success",
            data: {
                restaurant: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});

// restaurant更新（サンプル）
app.post("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query(
            "UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
            [req.body.name, req.body.location, req.body.price_range, req.params.id]
        );

        res.status(200).json({
            status: "succes",
            data: {
                restaurant: results.row[0],
            },
        });
    } catch(err) {
        console.log(err);
    }
    console.log(req.params.id);
    console.log(req.body);
})

// restaurant削除（サンプル）
app.delete("/api/v1/restaurants/:id", async (req, res) => {
    try {
        // 秘伝SQL
        const results = db.query("DELETE FROM restaurants where id = $1", [
            req.params.id,
        ])
        res.status(204).json({
            status: "sucess"
        })
    } catch (err) {
        console.log(err)
    }

})

app.listen(port, () => {
    console.log(`server start on port ${port}`);
})