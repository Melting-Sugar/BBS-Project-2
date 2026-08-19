import { Request, Response } from 'express';
import { BoardService } from '../services/BoardService';
import { BoardSchema } from '../schemas/BoardSchema';

export class BoardController {
    static fetchBoards = async (req: Request, res: Response) => {
        try {
            const boards = await BoardService.fetchBoards();
            res.status(200).json(boards);
        } catch (error) {
            console.error('Error fetching boards:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
