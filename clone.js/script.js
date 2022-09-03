const cp = require("child_process");
const fs = require("fs");

const n = 10;

if (n > 0) {
  fs.readFile(__filename, { encoding: "utf-8" }, (err, data) => {
    const clone = data.replace(`${n}`, `${n - 1}`);
    fs.writeFile(`${n - 1}.js`, clone, err => {
      cp.execSync(`node ${n - 1}.js`,);
    });
  });
}
