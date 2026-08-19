import express from "express";
import { AIManager } from "../../backend-ai/aiManager";

const router = express.Router();
const ai = new AIManager(process.env.OPENAI_API_KEY || "");

router.post("/ask", async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt requerido" });

  const respuesta = await ai.ask(prompt);
  res.json({ respuesta });
});

export default router;
import aiRoutes from "./routes/aiRoutes";
app.use(express.json());
app.use("/api/ai", aiRoutes);
