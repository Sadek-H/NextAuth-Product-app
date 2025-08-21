import { MongoClient, ServerApiVersion } from "mongodb";

let client;
let clientPromise;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.t5n91s9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

if (!process.env.DB_USER || !process.env.DB_PASS) {
  throw new Error("Please add DB_USER and DB_PASS to environment variables");
}

// For serverless (Vercel) reuse the client
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
      serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
    });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, {
    serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
  });
  clientPromise = client.connect();
}

export default async function Dbconnect(collectionName) {
  const client = await clientPromise;
  return client.db("products-nextjs").collection(collectionName);
}
