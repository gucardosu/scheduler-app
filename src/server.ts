import express from 'express';
import healthRoutes from './modules/health/controllers/routes/health.routes.js';

const app = express()
const port = 3000

app.use(express.json())
app.use(healthRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})