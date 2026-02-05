import cors from "cors";
import express from "express";
import analyzeRoutes from "./routes/analyze.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.use("/api", analyzeRoutes);

app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ message: "Unexpected server error." });
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
