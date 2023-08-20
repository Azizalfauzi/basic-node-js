import { parentPort, threadId } from "worker_threads";

parentPort.addListener("message", (data) => {
  for (let index = 0; index < data; index++) {
    console.info(`thread-${threadId} send message ${index}`);
    parentPort.postMessage(index);
  }
  parentPort.close();
});
