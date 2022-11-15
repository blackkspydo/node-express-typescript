var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import { User } from "./entity/User/user.entity.js";
import { myDataSource } from "./utils/appDataSource.js";
// establish database connection
myDataSource
    .initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((err) => {
    console.error("Error during Data Source initialization:", err);
});
const app = express();
app.use(express.json());
app.get("/users", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield myDataSource.getRepository(User).find();
        res.json(users);
    });
});
app.get("/users/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield myDataSource.getRepository(User).findOneBy({
            id: parseInt(req.params.id),
        });
        return res.send(results);
    });
});
app.post("/users", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield myDataSource.getRepository(User).create(req.body);
        const results = yield myDataSource.getRepository(User).save(user);
        return res.send(results);
    });
});
app.put("/users/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield myDataSource.getRepository(User).findOneBy({
            id: parseInt(req.params.id),
        });
        myDataSource.getRepository(User).merge(user, req.body);
        const results = yield myDataSource.getRepository(User).save(user);
        return res.send(results);
    });
});
app.delete("/users/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield myDataSource.getRepository(User).delete(req.params.id);
        return res.send(results);
    });
});
// start express server
app.listen(5000);
