const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;


global.countRestart = 0;


function startBot(message = "Starting the bot...") {
  logger(message, "[ Starting ]");

  const child = spawn(
    "node",
    ["--trace-warnings", "--async-stack-traces", "main.js"],
    {
      cwd: __dirname,
      stdio: "inherit",
      shell: true,
    }
  );

  child.on("close", (codeExit) => {
    if (codeExit !== 0 && global.countRestart < 5) {
      global.countRestart += 1;
      logger("Restarting bot...", "[ Restart ]");
      startBot();
    } else {
      logger("Bot exited successfully or restart limit reached.", "[ Exit ]");
    }
  });

  child.on("error", (error) => {
    logger("An error occurred: " + JSON.stringify(error), "[ Error ]");
  });
}


app.get("/", (req, res) => {
  res.send(`𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑 𝐀𝐘𝐎𝐔𝐁`);
});


app.listen(port, () => {
  console.log(`running on port: ${port}`);
});


logger("༺༽ 𝑨𝒀𝑶𝑼𝑩 𝑴𝑶𝑫𝑰𝑭𝑰𝑬𝑫༼༻", "[ NAME ]");
logger("Version: 1.1.0", "[ VERSION ]");

startBot();
