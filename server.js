import express from "express"
import routes from "./src/routes/postsRoutes.js"

// const posts =[
//   {
//     id:1,
//     descricao:"uma foto teste",
//     imagem: "https://placecats.com/millie/300/150",
//   },
//   {
//     id:2,
//     descricao: "Gato brincando com um novelo de lã",
//     imagem: "https://placecats.com/300/150"
//   },
//   {
//     id:3,
//     descricao: "Gatinho dormindo em uma caixa",
//     imagem: "https://placecats.com/300/150"
//   },
//   {
//     id:4,
//     descricao: "Dois gatos se olhando",
//     imagem: "https://placecats.com/300/150"
//   },
//   {
//     id:5,
//     descricao: "Gato curioso olhando para a câmera",
//     imagem: "https://placecats.com/300/150"
//   },
//   {
//     id:6,
//     descricao: "Gato tomando sol na janela",
//     imagem: "https://placecats.com/300/150"
//   }
// ]

// function findPostByID(id){
//   return posts.findIndex((post)=>{
    
//     return post.id === Number(id);
//   })
// }

const port = 3000
const app = express()

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
})

routes(app)


// app.get("/posts/:id", (req, res) =>{
//   const index = findPostByID(req.params.id);
//   res.status(200).json(posts[index]);
// })