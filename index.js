const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

app.get("/", (req,res) => {
    res.send("CaC Deploy en Vercel y Alwaysdata")
})

app.listen(PORT, () => console.log(`server ok`))



