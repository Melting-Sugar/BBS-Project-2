import { Request, Response } from 'express';
import { MessageService } from '../services/MessageService';
import { MessageSchema } from '../schemas/MessageSchema';

export class MessageController {
    static fetchMessages = async (req: Request, res: Response) => {
        try {
            const messages = await MessageService.fetchMessages();
            res.status(200).json(messages);
        } catch (error) {
            console.error('Error fetching messages:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static createMessage = async (req: Request, res: Response) => {
        try {
            const message = await MessageService.createMessage();
            res.status(200).json(message);
        } catch (error) {
            console.error('Error creating messages:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static removeMessage = async (req: Request, res: Response) => {
        try {
            const message = await MessageService.removeMessage();
            res.status(200).json(message);
        } catch (error) {
            console.error('Error removing message:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
