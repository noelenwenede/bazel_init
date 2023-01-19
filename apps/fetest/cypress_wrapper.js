const cypress = require("cypress");
const httpServer = require("http-server");

async function runCypress() {
  // create the server
  const server = httpServer.createServer({
    root: "../frontend/build",
    proxy: "http://localhost:3000?",
  });

  let results;

  try {
    // start listening
    await server.listen(3000, () => {
      console.log("Server listening on port 3000");
    });

    // run cypress
    await cypress
      .run({
        reporter: "junit",
        browser: "chrome",
        config: {
          baseUrl: "http://localhost:3000",
          video: true,
        },
      })
      .then((res) => {
        results = res;
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.log(error);
  } finally {
    // close the server
    // to free terminal
    server.close();
    console.log("==================================");
    console.log("Cypress results:", results);
    console.log("==================================");
    // Exit the process with the correct exit code
    process.exit(results? results.totalFailed: 1);
  }
}

runCypress();
