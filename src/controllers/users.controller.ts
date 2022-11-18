import { UserRepository } from "~/repository";
import { Request, Response } from "express"


export class UsersController{
    private userRepository: UserRepository;

 async getAllUsers (req: Request, res: Response)  {
  const users = await this.userRepository.getAllUsers();
    res.json(users);
}

 async getUserById   (req: Request, res: Response)  {
    const id = req.params.id;
    const user = await this.userRepository.getUserById(req.params.id);
    res.json(user);
}

 async createUser   (req: Request, res: Response)  {
    const user = req.body;
    const newUser = await this.userRepository.createUser(user);
    res.json(newUser);
}

 async updateUser   (req: Request, res: Response)  {
    const user = req.body;
    const updatedUser = await this.userRepository.updateUser(user);
    res.json(updatedUser);
}

 async deleteUser   (req: Request, res: Response)  {
    const reqBody = req.body;
    const id = reqBody.id;
    const deletedUser = await this.userRepository.deleteUser(id);
    res.json(deletedUser);
}

}