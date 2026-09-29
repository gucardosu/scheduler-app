import express from 'express';
import healthRoutes from './modules/health/routes/health.routes.js';
import userRoutes from './modules/user/routes/user.routes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(healthRoutes);
app.use(userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});