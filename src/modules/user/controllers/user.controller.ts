import { Request, Response } from "express";
import { UserService } from "../services/user.service.js";

export class UserController {
    constructor(private service: UserService) {}
    async createUser(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body;

            const user = await this.service.createUser(name, email, password);
            return res.status(201).json(user)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao cadastrar sua conta'})
        }
    }
}