import pool from '../db';
import { BoardEntity } from '../entities/BoardEntity';

export class BoardModel {
    static fetchBoards = async (): Promise<BoardEntity[]> => {
        const query = `SELECT id, name, last_posted_at AS "lastPostedAt" FROM boards`;
        const result = await pool.query(query);


        return result.rows.map((row: any) => ({
            id: row.id,
            name: row.name,
            lastPostedAt: row.lastPostedAt ? new Date(row.lastPostedAt) : null,
        }));
    }
}

//ORM使うともっと楽