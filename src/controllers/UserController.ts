import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
import { UserSchema } from '../schemas/UserSchema';

export class UserController {
    static login = async (req: Request, res: Response) => {
        try {
            const user = await UserService.login();
            res.status(200).json(user);
        } catch (error) {
            console.error('login Error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static register = async (req: Request, res: Response) => {
        try {
            const user = await UserService.register();
            res.status(200).json(user);
        } catch (error) {
            console.error('register Error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}