import fs from "fs";
import {getAllPosts, createPost, updateNewPost} from "../models/postsModel.js";
import gerarDescricaoComGemini from "../services/geminiService.js"

export async function listPosts(req, res){
  const posts = await getAllPosts();
  res.status(200).json(posts);
}

export async function createNewPost(req, res){
  const newpost = req.body;
  try{
    const createdPost = await createPost(newpost);
    res.status(200).json(createdPost);

  }catch(error){
    console.error(error.message);
    res.status(500).json({"Erro":"Falha na requisição"});
  }
}

export async function uploadImg(req, res){
  const newpost = {
    descricao:"",
    imgUrl:req.file.originalname,
    alt:""
  }
  try{
    const createdPost = await createPost(newpost);

    const updatedImage = `uploads/${createdPost.insertedId}.png`
    fs.renameSync(req.file.path,updatedImage)
    
    res.status(200).json(createdPost);

  }catch(error){
    console.error(error.message);
    res.status(500).json({"Erro":"Falha na requisição"});
  }
}

export async function updatePost(req, res){
  const id = req.params.id;
  const urlImage = `http://localhost:3000/${id}.png`;
  
  try{
    const imageBuffer = fs.readFileSync(`uploads/${id}.png`);
    const description = await gerarDescricaoComGemini(imageBuffer)

    const updatedPost = {
      imgUrl: urlImage,
      descricao:description,
      alt: req.body.alt
    }
    const createdPost = await updateNewPost(id, updatedPost);
    res.status(200).json(createdPost);

  }catch(error){
    console.error(error.message);
    res.status(500).json({"Erro":"Falha na requisição"});
  }
}
