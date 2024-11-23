import express from "express";
import multer from "multer";
import cors from "cors";
import { listPosts, createNewPost, uploadImg, updatePost } from "../controllers/postsController.js";

const corsOptions ={
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200,
}

const upload = multer({ dest: "./uploads" });

function routes(app){
  app.use(express.json())
  app.use(cors(corsOptions))
  
  app.get("/posts", listPosts);
  app.post("/posts", createNewPost)
  
  app.post("/upload",upload.single("imagem"), uploadImg)
  app.put("/upload/:id", updatePost)
}
export default routes;