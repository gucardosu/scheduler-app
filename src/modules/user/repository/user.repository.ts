import { pool } from "../../../database/connection.js";
import { User } from "../types/user.types.js";

export class UserRepository { 
  async create(name: string, email: string, password: string): Promise<User> {
    const result = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
      [name, email, password]
    );
    return result.rows[0] as User;
  }
}
