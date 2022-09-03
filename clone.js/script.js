const cp = require("child_process");
const fs = require("fs");

const n = 10;

const [command] = process.argv.slice(2);
if (command === "clean") {
  for (let i = n - 1; i >= 0; i--) {
    if (fs.existsSync(`${i}.js`)) {
      fs.unlinkSync(`${i}.js`);
    }
  }
  process.exit(0);
}

const runClone = err => {
  if (err) {
    console.log(`Cloning to ${n - 1}.js failed. Aborting...`);
  }

  cp.execSync(`node ${n - 1}.js`);
};

const cloneFile = (err, data) => {
  if (err) {
    console.log(`Opening file ${__filename} failed. Aborting...`);
    return;
  }

  const clone = data.replace(`${n}`, `${n - 1}`);
  fs.writeFile(`${n - 1}.js`, clone, runClone);
};

if (n > 0) {
  fs.readFile(__filename, { encoding: "utf-8" }, cloneFile);
}
