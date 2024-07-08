import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { auth } from './middlewares/auth';
import { USERS, JWT_SECRET, getNextUserId } from './constants';
import { User } from './types';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.json({
    msg: 'hello world',
  });
});

app.get('/me', auth, (req: Request, res: Response) => {
  const user = USERS.find((x) => x.id === req.userId);
  res.json({ email: user?.email, id: user?.id });
});

app.post('/signup', (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (USERS.find((x) => x.email === email)) {
    return res.status(403).json({ msg: 'Email already exists' });
  }

  const newUser: User = {
    email,
    password,
    id: getNextUserId(),
  };

  USERS.push(newUser);

  res.json({
    msg: 'Success',
  });
});

app.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = USERS.find((x) => x.email === email);

  if (!user) {
    return res.status(403).json({ msg: 'User not found' });
  }

  if (user.password !== password) {
    return res.status(403).json({ msg: 'Incorrect password' });
  }

  const token = jwt.sign(
    {
      id: user.id,
    },
    JWT_SECRET,
  );

  res.json({ token });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
