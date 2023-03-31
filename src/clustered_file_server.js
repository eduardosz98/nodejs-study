const cluster = require("cluster");
const fsMethods = require("../examples/utilities/fs_methods");

/**
 * Initializes http server for handling API requests
 */
const runServer = () => {
  const http = require("http");

  const server = http.createServer(async (req, res) => {
    console.log(`Cluster handling the request: ${process.pid}`);

    fsMethods.append(
      "my-directory",
      "file-chat.txt",
      `${new Date().toISOString()}: Request accepted`,
      async () => {
        const response = await fsMethods.read("my-directory", "file-chat.txt");
        res.end(response);
      }
    );
  });

  server.listen(3000);
};

/**
 * Instantiate clusters based on machine cpu count
 */
const instantiateClusters = () => {
  console.log(`Master instance running: ${process.pid}`);

  const cpuCount = require("os").cpus().length;
  console.log(`Clusters available: ${cpuCount}`);

  for (let x = 0; x < cpuCount; x++) {
    cluster.fork();
  }
};

/**
 * Main function that starts the application
 */
module.exports = main = () => {
  if (cluster.isPrimary) {
    instantiateClusters();
  } else {
    runServer();
    fsMethods.watch("my-directory", "file-chat.txt");
  }
};
