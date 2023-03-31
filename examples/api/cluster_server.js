const cluster = require("cluster");

const run = () => {
  const http = require("http");

  const server = http.createServer((req, res) => {
    console.log(`Cluster handling the request: ${process.pid}`);
    res.end("Hello World");
  });

  server.listen(3000);
};

const instantiateClusters = () => {
  console.log(`Master instance running: ${process.pid}`);

  const cpuCount = require("os").cpus().length;
  console.log(`CPUs available: ${cpuCount}`);

  for (let x = 0; x < cpuCount; x++) {
    cluster.fork();
  }
};

if (cluster.isPrimary) {
  instantiateClusters();
} else {
  run();
}
