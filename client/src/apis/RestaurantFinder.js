import axios from "axios";

// restaurant保存場所のbaseURLを設定
export default axios.create({
    baseURL: "http://localhost:3001/api/v1/restaurants",
});