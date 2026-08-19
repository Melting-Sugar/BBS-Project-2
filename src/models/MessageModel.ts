import pool from '../db';
import {MessageEntity} from '../entities/MessageEntity'

export class MessageModel {
    static fetchMessages = async (boardId: number, beforeId?: number): Promise<MessageEntity[]> => {
        //基本クエリ
        let query = `SELECT id, board_id AS "boardId", user_id AS "userId", content, image, posted_at AS "postedAt", is_deleted AS "isDeleted" FROM messages
        WHERE board_id = $1 AND is_deleted = false`;

        const values: any[] = [boardId];

        //基準IDがある場合
        if(beforeId){
            values.push(beforeId);
            query += ` AND id < $2`;
        }

        query += ` ORDER BY posted_at DESC LIMIT 20`;

        const result = await pool.query(query, values);

        return result.rows.map((row: any) => ({
            id: row.id,
            boardId: row.boardId,
            userId: row.userId,
            content: row.content,
            image: row.image,
            postedAt: new Date(row.postedAt),
            isDeleted: row.isDeleted,
        }));
    }

    static createMessage = async (boardId: number, userId: number, content: string, image: string | null): Promise<MessageEntity> => {
        const query = `
        INSERT INTO messages (board_id, user_id, content, image, posted_at, is_deleted)
        VALUES ($1, $2, $3, $4, NOW(), false)
        RETURNING id, board_id AS "boardId", user_id AS "userId", content, image, posted_at AS "postedAt", is_deleted AS "isDeleted"
        `;

        const values = [boardId, userId, content, image];
        const result = await pool.query(query, values);
        const row = result.rows[0];

        return {
            id: row.id,
            boardId: row.boardId,
            userId: row.userId,
            content: row.content,
            image: row.image,
            postedAt: new Date(row.postedAt),
            isDeleted: row.isDeleted,
        };    
    }
}