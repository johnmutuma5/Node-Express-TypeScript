import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

// routes
const add: (a:number, b:number) => number = (a, b) => a + b;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello, world: ' + add(2, 3));
});

app.listen(5000, () => console.log('Serve listenning on PORT 5000'));
