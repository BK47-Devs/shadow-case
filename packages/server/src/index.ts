import express from "express";
import { SHARED_PACKAGE_NAME } from "@shadow-case/shared";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.get("/health", (_req, res) => {
  res.json({ status: "ok", shared: SHARED_PACKAGE_NAME });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
