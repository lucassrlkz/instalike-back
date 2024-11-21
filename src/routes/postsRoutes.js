import express from "express";
import { listPosts } from "../controllers/postsController.js";

function routes(app){
  app.use(express.json())
  
  app.get("/posts", listPosts)

}
export default routes;