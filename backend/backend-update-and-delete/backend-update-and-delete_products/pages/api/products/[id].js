import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";
import Review from "@/db/models/Review";

export default async function handler(request, response) {
  try {
    await dbConnect();
    const { id } = request.query;

    if (request.method === "GET") {
      const product = await Product.findById(id).populate("reviews");

      if (!product) {
        return response
          .status(404)
          .json({ status: "Requested product not Found" });
      }

      return response.status(200).json(product);
    }

    if (request.method === "PUT") {
      const updatedProduct = request.body;
      const productToUpdate = await Product.findByIdAndUpdate(
        id,
        updatedProduct
      );
      return response.status(200).json({
        message: "Product successfully updated.",
        newProduct: productToUpdate,
      });
    }

    if (request.method === "DELETE") {
      const productToDelete = await Product.findById(id);

      if (!productToDelete) {
        return response.status(404).json({
          error: "Item to delete could not be found in the database.",
        });
      }

      // Delete related reviews
      await Review.deleteMany({ _id: { $in: productToDelete.reviews } });

      // Delete the product
      await Product.findByIdAndDelete(id);

      return response.status(200).json({
        message: "Product and all related reviews were successfully deleted.",
        deletedProduct: productToDelete,
      });
    }

    return response.status(405).json({
      error: "The request method you are trying to use is not being handled.",
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Internal server error." });
  }
}
