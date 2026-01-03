import { MongoClient } from "mongodb"

const MONGO_URI =
  "mongodb+srv://fluxxzyofficial_db_user:o1SekIQ7eZbVHHpv@swezesty.lbdr9bs.mongodb.net/swezesty-db?retryWrites=true&w=majority&appName=swezesty"
const options = {}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (!global._mongoClientPromise) {
  client = new MongoClient(MONGO_URI, options)
  global._mongoClientPromise = client.connect()
}
clientPromise = global._mongoClientPromise

export default clientPromise
