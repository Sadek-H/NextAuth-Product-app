import { MongoClient, ServerApiVersion } from "mongodb"

export default function Dbconnect (collectionName){
    const uri = "mongodb+srv://products-nextjs:FA1Q41e9XW7lnrkx@cluster0.t5n91s9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
return client.db("products-nextjs").collection(collectionName);

}