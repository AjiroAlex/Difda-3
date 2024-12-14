const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const express = require("express");

const app = express();
const port = process.env.PORT || 3078; 
app.get("/", (req, res) => {
  res.send(`𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑 𝐀𝐘𝐎𝐔𝐁`);
});

function startBot(message) {
  (message) ? logger(message, "[ Starting ]") : "";

  const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "main.js"], {
    cwd: __dirname,
    stdio: "inherit",
    shell: true
  });

  child.on("close", (codeExit) => {
    if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
      startBot("Starting up...");
      global.countRestart += 1;
      return;
    } else return;
  });

  child.on("error", function(error) {
    logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
  });
};


  logger('••¤(`×[¤ AYOUB ¤]×´)¤••', "[ NAME ]");
  logger("Version: 1.1.0", "[ VERSION ]");


startBot();

app.listen(port, () => {
  console.log(`bot running in port: ${port}`);
});
