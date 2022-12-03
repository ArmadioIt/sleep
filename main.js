const sleep = require('sleep-promise');

// Checks for --custom and if it has a value
const customIndex = process.argv.indexOf('--seconds');
let customValue = "";

if (customIndex > -1) {
  // Retrieve the value after --custom
  customValue = process.argv[customIndex + 1];
  console.log(customValue)
}

async function wait(time){
	console.log("Hello World.");
	await sleep(time * 1000);
	console.log("Will be printed after " + time + " seconds.");	
}

if (customValue == ""){
	wait(5)
} else {
	wait(customValue)	
}
