import cluster from "cluster";
import os from "os";
import process from "process";
import http from "http";

if (cluster.isPrimary) {
  // jalankan worker
  console.info(`primary:${process.pid}`);
  for (let index = 0; index < os.cpus().length; index++) {
    cluster.fork();
  }
  cluster.addListener("exit", (data) => {
    console.info(`Worker-${data.id} is exit`);
  });
}

if (cluster.isWorker) {
  console.info(`worker:${process.pid}`);
  const server = http.createServer((req, res) => {
    res.write(`Response with process${process.pid}`);
    res.end();
    process.exit();
  });

  server.listen(3000);
}
