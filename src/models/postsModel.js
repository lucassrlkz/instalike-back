import connectDatabase from "../config/dbConfig.js"

const connection = await connectDatabase(process.env.MONGODB_CONNECTION)

export default async function getAllPosts(){
  const db = await connection.db(process.env.DATABASE)
  const collection = db.collection(process.env.COLLECTION)
  
  return collection.find().toArray()
} 