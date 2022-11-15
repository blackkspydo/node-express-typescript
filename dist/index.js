import express from 'express';
const app = express();
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});

app.listen(5000, () => {
    console.log(`[server]: Server is running at http://localhost:5000`);
});
