import Dbconnect from "@/lib/dbConnect";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, description, price, brand, category, rating, stock, image } = body;

    if (!name || !description || !price || !brand || !category || !rating || !stock || !image) {
      return Response.json({ message: "All fields are required" }, { status: 400 });
    }

    const productsCollection = await Dbconnect("products");
    const result = await productsCollection.insertOne({
      name,
      description,
      price: parseFloat(price),
      brand,
      category,
      rating: parseFloat(rating),
      stock: parseInt(stock),
      image
    });

    return Response.json(
      { message: "Product added successfully", id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/products error:", error);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const productsCollection = await Dbconnect("products");
    const products = await productsCollection.find({}).toArray();

    return Response.json(products, { status: 200 });
  } catch (error) {
    console.error("GET /api/products error:", error);
    return Response.json({ message: "Failed to fetch products" }, { status: 500 });
  }
}
