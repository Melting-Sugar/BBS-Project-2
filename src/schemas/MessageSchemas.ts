import { z } from 'zod';

export const MessageCreateSchema = z.object({
    content: z.string()
    .min(1, "メッセージは必須です")
    .max(200, "メッセージは200文字以内で入力してください"),
    image: z.string().nullable().optional()
});

export type MessageCreateDTO = z.infer<typeof MessageCreateSchema>;

// --- 出力用 DTO（Response DTO） ---

export interface MessageResponseDTO {
    id: number;
    boardId: number;
    userId: number;
    content: string;
    image: string | null;
    postedAt: Date;
}