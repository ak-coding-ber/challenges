import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  try {
    await dbConnect();

    if (request.method === "GET") {
      const products = await Product.find();
      return response.status(200).json(products);
    }

    if (request.method === "POST") {
      const productData = request.body;

      if (!productData.name || !productData.price || !productData.description) {
        return response
          .status(400)
          .json({
            error:
              "Data not saved. All fields are required. Please fill out all input fields.",
          });
      }
      const product = new Product(productData);
      await product.save();
      return response.status(201).json({ status: "Product created." });
    }
  } catch (error) {
    // console.error(error);
  }
}
