import express from "express"

const port = 3000
const app = express()

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
})

app.get("/api", (req, res) =>{
  res.status(200).send("servidor funcionando!");
})