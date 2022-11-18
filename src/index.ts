import bodyParser from 'body-parser';
import express from "express"
import { Request, Response } from "express"
import { Photo } from "~/entities";
import { Profile } from "~/entities";
import { User } from "~/entities";
import { sqliteDataSource } from "./utils/appDataSource.js"


sqliteDataSource.initialize().then(()=>{
        console.log("sqlite Data Source has been initialized!")
    }).catch((err)=>{
        console.error("Error during sqlite Data Source initialization:", err)
    })

const app = express()
const jsonParser = bodyParser.json()
app.get("/users", async function (req: Request, res: Response) {
    const users = await sqliteDataSource.getRepository(User).find()
    res.json(users)
})

app.get("/users/:id", async function (req: Request, res: Response) {
    const results = await sqliteDataSource.getRepository(User).findOneBy({
        id: req.params.id,
    })
    return res.send(results)
})

app.post("/users",jsonParser, async function (req: Request, res: Response) {
    try{
        const reqData = req.body
        const user = new User()
        user.firstName = reqData.firstName
        user.lastName = reqData.lastName
        const profile = new Profile()
        profile.bio = reqData.bio
        profile.profileUrl = reqData.profileUrl
        profile.isAvailable = reqData.isAvailable
        profile.user = user
        await sqliteDataSource.getRepository(Profile).save(profile)
        return res.send({
            profile
        })
    }catch(err){
        console.error(err)
        return res.status(500).send
    }
})
        
       
app.post("/profile", async function (req: Request, res: Response) {
    try{
    const profile = await sqliteDataSource.getRepository(Profile).create(req.body)
    const results = await sqliteDataSource.getRepository(Profile).save(profile)
    return res.send(results)
    }catch(err){
        console.error(err)
        return res.send(err)
    }
})

app.put("/users/:id", async function (req: Request, res: Response) {
    const user = await sqliteDataSource.getRepository(User).findOneBy({
        id: req.params.id,
    })
    sqliteDataSource.getRepository(User).merge(user!, req.body)
    const results = await sqliteDataSource.getRepository(User).save(user!)
    return res.send(results)
})

app.delete("/users/:id", async function (req: Request, res: Response) {
    const results = await sqliteDataSource.getRepository(User).delete(req.params.id)
    return res.send(results)
})

app.post("/users/photo",jsonParser, async function (req: Request, res: Response) {
    try {
        const data = req.body
        console.log(data)
        const userId = data.userId
        const url = data.url
        if(!userId){
            return res.status(400).send("Bad Request")
        }
        if (!url) {
            return res.status(400).send({
                message: "Bad Request"

            })
        }
        const user =    await sqliteDataSource.getRepository(User).findOneBy({
            id: userId,
        })
        if(user){
        const photo = new Photo()
        photo.url = url
        photo.user = user
        const results = await sqliteDataSource.getRepository(Photo).save(photo)
        return res.send(results)
        }
        
    } catch (error) {
        console.error(error)
        return res.status(500).send(error)
    }
})

app.get("/users/:id/photo", async function (req: Request, res: Response) {
    try {
        const userId = req.params.id
        if (!userId) {
            return res.status(400).send("Bad Request")
        }
        const user = await sqliteDataSource.getRepository(User)
        if (user) {
            const photos = await user.find({
                relations: ["photos","profile"],
                where: {
                    id: userId
                }
            })
            return res.send(photos)
        }
    } catch (error) {
        console.error(error)
        return res.status(500).send
    }
})



app.listen(8080)