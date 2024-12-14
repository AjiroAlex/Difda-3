const chalk = require('chalk');
const gradient = require('gradient-string');
const logger = {
  log: (messages) => {
    messages.forEach((msg) => {
      const color = Array.isArray(msg.color) ? gradient(msg.color) : chalk.hex(msg.color);
      console.log(color(msg.message));
    });
  },
};

const cv = chalk.bold.hex("#1390f0");
const logo = `

           ██████╗  ██████╗ ████████╗
           ██╔══██╗██╔═══██╗╚══██╔══╝
           ██████╔╝██║   ██║   ██║   
           ██╔══██╗██║   ██║   ██║   
           ██████╔╝╚██████╔╝   ██║   
           ╚═════╝  ╚═════╝    ╚═╝   
`;
const c = ["black", "#e34d07"];
const redToGreen = gradient("green", "cyan");

console.log(redToGreen("━".repeat(50), { interpolation: "hsv" }));
const text = gradient(c).multiline(logo);
console.log(text);
console.log(redToGreen("━".repeat(50), { interpolation: "hsv" }));

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#FF00FF").bold('[ ERROR ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FF00FF").bold('[ ERROR ] »') + data);
     break;
		default:			        
                        console.log(chalk.bold.hex("#00BFFF").bold(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {

		case "warn":
			console.log(gradient.rainbow('[ 😈 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑 𝐀𝐘𝐎𝐔𝐁 😈 ] » ') + data);
			break;
		case "error":
			console.log(gradient.rainbow('[ 👿 ERROR 👿 ] » ') + data);
			break;
		default:
			console.log(gradient.rainbow('[ 😈 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑 𝐀𝐘𝐎𝐔𝐁 😈 ] » ') + data);
			break;
	}
  }
