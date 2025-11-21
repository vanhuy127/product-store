import axios from "axios";

export const getProducts = async () => {
  try {
    return await axios.get("https://fakestoreapi.com/products");
  } catch (error) {
    console.error("Lỗi gọi API sản phẩm:", error);
    throw error;
  }
};
