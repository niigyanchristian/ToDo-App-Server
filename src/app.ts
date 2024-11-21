import express from 'express';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes';
import MongoDB from './utils/database';


const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

MongoDB()

app.get('/', (req, res) => {
    res.send('Todo App Backend');
});

app.use('/api', todoRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
