import express from "express";
import { Worker, Queue } from "bullmq";

const myBigInt = 1000000n;

const myQueue = new Queue("foo");
const worker = new Worker("foo", (job) => {});

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

if (import.meta.env.PROD) {
  app.listen(3000);
}

export const viteNodeApp = app;
