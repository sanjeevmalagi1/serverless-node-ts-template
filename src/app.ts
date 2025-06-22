import express, { Request, Response } from "express"
import cors from "cors"
import promClient from "prom-client"

const app = express()
const register = new promClient.Registry();

promClient.collectDefaultMetrics({ register });

app.use(express.json());
app.use(cors());

app.get('/metrics', async (_req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.get('/healthcheck', async (_req: Request, res: Response) => {
  res.status(200).json({ status: "OK" })
})

export default app
  