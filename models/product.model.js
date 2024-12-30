const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },

    price: {
      type: Number,
      required: true,
      default: 0,
      min: [0, "Price must be a positive value"],
    },
    
    quantity: {
      type: Number,
      required: true,
      default: () => 0,
    },

    description: {
      type: String,
      required: true,
      minlength: [10, "Description must be at least 10 characters long"],
    },

    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;