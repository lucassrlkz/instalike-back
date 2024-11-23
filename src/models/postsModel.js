import "dotenv/config";
import { ObjectId } from "mongodb"
import connectDatabase from "../config/dbConfig.js"

const connection = await connectDatabase(process.env.MONGODB_CONNECTION)

async function collectionDB(connection){
  
  const db = await connection.db(process.env.DATABASE)
  const collection = db.collection(process.env.COLLECTION)
  return collection
}
export async function getAllPosts(){

  const collection = await collectionDB(connection)
  return collection.find().toArray()
} 
export async function createPost(newPost){
  
  const collection = await collectionDB(connection)
  return collection.insertOne(newPost)
}
export async function updateNewPost(id, updatedPost){

  const collection = await collectionDB(connection)
  const objId = ObjectId.createFromHexString(id)

  return collection.updateOne({_id:new ObjectId(objId)}, {$set:updatedPost})
}