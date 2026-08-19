export interface UserEntity {
    id: number;
    username: string;
    password: string;
    icon: string | null;
    lastLoginAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}