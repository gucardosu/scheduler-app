import { Router } from 'express';
import { UserRepository } from '../repository/user.repository.js';
import { UserService } from '../services/user.service.js';
import { UserController } from '../controllers/user.controller.js';

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

const router = Router();

router.post('/users', (req, res) => userController.createUser(req, res));

export default router

