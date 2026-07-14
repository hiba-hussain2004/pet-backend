const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://hiba:hiba2004@ac-sdbjr8i-shard-00-00.qlrxeq6.mongodb.net:27017,ac-sdbjr8i-shard-00-01.qlrxeq6.mongodb.net:27017,ac-sdbjr8i-shard-00-02.qlrxeq6.mongodb.net:27017/coursedb?ssl=true&replicaSet=atlas-q5ignz-shard-0&authSource=admin&appName=Cluster0")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((error) => {
    console.log(error);
});

const booking = mongoose.model(
    "petbooking",
    new mongoose.Schema({
        booking_id: String,
        pet_name: String,
        pet_type: String,
        breed: String,
        age: String,
        weight: String,
        vaccination_status: String,
        owner_name: String,
        owner_phone: String,
        owner_email: String,
        check_in_date: String,
        check_out_date: String,
        kennel_number: String
    })
);

app.post("/add-booking", async (req, res) => {
    await booking.create(req.body);
    res.json({ status: "success" });
});

app.get("/view-booking", async (req, res) => {
    const data = await booking.find();
    res.json(data);
});

app.listen(3002, () => {
    console.log("Server Started");
});