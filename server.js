import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).send({message: 'first endpoint'}));


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

export default app;