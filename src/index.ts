import router from './routes/routes';

import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// 環境変数（.env）の読み込み
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Reactからの通信を許可
app.use(cors());
// クライアントから送られてくるJSONデータを読み取れるようにする
app.use(express.json());

app.use('/api', router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:3000}`);
});