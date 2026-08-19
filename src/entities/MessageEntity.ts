export interface MessageEntity {
    id: number;
    boardId: number;
    userId: number;
    content: string;
    image: string | null;
    postedAt: Date;
    isDeleted: boolean;
}