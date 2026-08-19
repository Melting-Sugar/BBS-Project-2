import { z } from 'zod';

//新規登録用
export const UserRegisterSchema = z.object({
    username: z.string()
    .min(1, "名前は必須です")
    .max(20, "名前は20文字以内で入力してください"),
    password: z.string()
    .min(8, "パスワードは8文字以上で入力してください")
    .max(50, "パスワードは50文字以内で入力してください"),
    icon: z.string().nullable().optional()
});

//ログイン用
export const UserLoginSchema = z.object({
    username: z.string()
    .min(1, "名前を入力してください"),
    password: z.string()
    .min(1, "パスワードを入力してください")
});

export type UserRegisterDTO = z.infer<typeof UserRegisterSchema>;
export type UserLoginDTO = z.infer<typeof UserLoginSchema>;

export interface UserResponseDTO {
    id: number;
    username: string;
    icon: string | null;
    lastLoginAt: Date | null;
    createdAt: Date;
}