import { Request, Response } from "express";
import { pool } from "../../../database/connection.js";

export const healthController = {
    getHealth: async (req: Request, res: Response) => {
        try {
            const result = await pool.query('SELECT NOW()');
            res.status(200).json({ status: 'OK', dbTime: result.rows[0].now });
        } catch (error) {
            res.status(500).json({ status: 'Error' });
        }
    }
}