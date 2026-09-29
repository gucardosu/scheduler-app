import bcrypt from 'bcrypt';
import { UserRepository } from '../repository/user.repository.js';
import { User } from '../types/user.types.js';

export class UserService {
    constructor(private repository: UserRepository) {}
    async createUser(name: string, email: string, password: string) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await this.repository.create(name, email, hashedPassword);
        return user;
    }
}