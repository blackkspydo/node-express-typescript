import { profile } from "console";
import express from "express"
import { Request, Response } from "express"
import { Profile } from "./entity/profile.entity.js";
import { User } from "./entity/user.entity.js"
import { myDataSource } from "./utils/appDataSource.js"

// establish database connection
myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

const app = express()
app.use(express.json())

app.get("/users", async function (req: Request, res: Response) {
    const users = await myDataSource.getRepository(User).find()
    res.json(users)
})

app.get("/users/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(User).findOneBy({
        id: req.params.id,
    })
    return res.send(results)
})

app.post("/users", async function (req: Request, res: Response) {
    try{
    const user = await myDataSource.getRepository(User).create(req.body)
    const results = await myDataSource.getRepository(User).save(user)
    return res.send(results)
    }catch(err){
        console.error(err)
        return res.send(err)
    }
})
app.post("/profile", async function (req: Request, res: Response) {
    try{
    const profile = await myDataSource.getRepository(Profile).create(req.body)
    const results = await myDataSource.getRepository(Profile).save(profile)
    return res.send(results)
    }catch(err){
        console.error(err)
        return res.send(err)
    }
})

app.put("/users/:id", async function (req: Request, res: Response) {
    const user = await myDataSource.getRepository(User).findOneBy({
        id: req.params.id,
    })
    myDataSource.getRepository(User).merge(user!, req.body)
    const results = await myDataSource.getRepository(User).save(user!)
    return res.send(results)
})

app.delete("/users/:id", async function (req: Request, res: Response) {
    const results = await myDataSource.getRepository(User).delete(req.params.id)
    return res.send(results)
})

app.listen(5000)