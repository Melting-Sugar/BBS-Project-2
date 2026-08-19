import pool from '../db';
import { UserEntity } from '../entities/UserEntity'

//新規登録
export class UserModel {
    static insert = async (username: string, passwordHash: string, icon: string | null): Promise<UserEntity> => {
        const query = `
        INSERT INTO users (username, password, icon, last_login_at, created_at, updated_at)
        VALUES($1, $2, $3, NULL, NOW(), NOW())
        RETURNING id, username, password, icon, last_login_at AS "lastLoginAt", created_at AS "createdAt", updated_at AS "updatedAt"
        `;

        const values = [username, passwordHash, icon];
        const result = await pool.query(query, values);
        const row = result.rows[0];

        return {
            id: row.id,
            username: row.username,
            password: row.password,
            icon: row.icon,
            lastLoginAt: row.lastLoginAt ? new Date(row.lastLoginAt) : null,
            createdAt: new Date(row.createdAt),
            updatedAt: new Date(row.updatedAt),
        };
    }

    //ログイン
    static findByUsername = async (username: string): Promise<UserEntity | null> => {
        const query = `
        SELECT id, username, password, icon, last_login_at AS "lastLoginAt", created_at AS "createdAt", updated_at AS "updatedAt" FROM users
        WHERE username = $1
        `;
        
        const result = await pool.query(query, [username]);
        //該当ユーザーが見つからなかったらnullを返す
        if (result.rows.length === 0) {
            return null;
        }

        const row = result.rows[0];
        return {
            id: row.id,
            username: row.username,
            password: row.password,
            icon: row.icon,
            lastLoginAt: row.lastLoginAt ? new Date(row.lastLoginAt) : null,
            createdAt: new Date(row.createdAt),
            updatedAt: new Date(row.updatedAt),
        };
    }
}
