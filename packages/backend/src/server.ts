import express, { Request, Response } from 'express';
import cors from 'cors';
import { User } from '@shared';

const app = express();
app.use(cors());
app.use(express.json());

const user: User = { id: '1', name: 'Alice', email: 'alice@example.com' };

app.get('/api/user', (req: Request, res: Response) => {
  res.json(user);
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));
