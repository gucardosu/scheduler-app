import { pool } from "../../../database/connection.js";

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export const userRepository = {
  create: async (name: string, email: string, password: string) => {
    const result = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
      [name, email, password]
    );
    return result.rows[0] as User;
  }
}