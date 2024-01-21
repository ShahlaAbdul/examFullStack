import express from "express";
import { Schema, mongoose } from "mongoose";
import cors from "cors";
const app = express();
const port = 3200;

app.use(cors());
app.use(express.json());

const shoppersSchema = new Schema({
  image: String, // String is shorthand for {type: String}
  name: String,
  description: String,
  price: Number,
});

const ShoppersModel = mongoose.model("Shoppers", shoppersSchema);
app.get("/", async (req, res) => {
  try {
    const shoppers = await ShoppersModel.find({});
    res.send(shoppers);
  } catch (error) {
    res.send("error!");
  }
});

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const shoppers = await ShoppersModel.findById(id);
    res.send(shoppers);
  } catch (error) {
    res.send("error!");
  }
});
app.post("/", async (req, res) => {
  try {
    const { image, name, description, price } = req.body;
    const newShoppers = new ShoppersModel({ image, name, description, price });
    await newShoppers.save();
    res.send(newShoppers);
  } catch (error) {
    res.send("error!");
  }
});

app.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { image, name, description, price } = req.body;
    const newShoppers = await ShoppersModel.findById(id, {
      image,
      name,
      description,
      price,
    });
    res.send(newShoppers);
  } catch (error) {
    res.send("error!");
  }
});
app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const newShoppers = await ShoppersModel.findByIdAndDelete(id);
    res.send(newShoppers);
  } catch (error) {
    res.send("error!");
  }
});

mongoose
  .connect("mongodb+srv://Shahla:sehla200415@mycluster.vpdzf3b.mongodb.net/")
  .then(() => console.log("connected"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
