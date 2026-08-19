import { z } from 'zod';


//URLの掲示板IDをチェック
export const BoardIdParamSchema = z.object({
    boardId: z.coerce.number().int("掲示板IDは整数である必要があります").positive("掲示板IDは正の数である必要があります")
});

export type BoardIdParamDTO = z.infer<typeof BoardIdParamSchema>;

export interface BoardResponseDTO {
    id: number;
    name: string;
    lastPostedAt: Date | null;
}