export interface BoardEntity {
    id: number;
    name: string;
    lastPostedAt: Date | null; //あえて正規化せずこちらにも置いておく
}