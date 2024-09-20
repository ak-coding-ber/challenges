import Product from "@/db/models/Product";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  const product = await Product.findById(id).populate("reviews");

  if (!product) {
    return response.status(404).json({ status: "Not Found" });
  }

  response.status(200).json(product);
}
