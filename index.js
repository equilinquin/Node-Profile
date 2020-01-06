const inquirer = require("inquirer");
const fs = require("fs");
const electron = require("electron");
const convertFactory = require('electron-html-to');
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const axios = require("axios");
const generateHTML = require("./generateHTML");
const gi = require("./gitignore");

const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "color",
    message: "Do you like green, blue, pink, or red? (Choose One)"
  }
];
function promptUser() {
  return inquirer.prompt(questions);
}

promptUser().then(ans => {
  const one = axios.get(`https://api.github.com/users/${ans.username}`);
  const two = axios.get(`https://api.github.com/users/${ans.username}/watched`);

  axios
    .all([one, two])
    .then(
      axios.spread((...res) => {
        const resOne = res[0];
        const resTwo = res[1];

        writeToFile(
          "profile.html",
          generateHTML(resOne.data, resTwo.data, ans.color)
        );
      })
    )
    .catch(err => {
      if (err) {
        throw err;
      }
    });
});



const conversion = convertFactory({
  converterPath: convertFactory.converters.PDF,
  allowLocalFilesAccess: true
});

function writeToFile(fileName, data) {
  writeFileAsync(fileName, data).then(() => {
    conversion({ html: "./profile.html" }, function(err, result) {
      if (err) {
        return console.error(err);
      }
      console.log(result.numberOfPages);
      console.log(result.logs);
      result.stream.pipe(fs.createWriteStream("profile.pdf"));
      conversion.kill(); // necessary if you use the electron-server strategy, see bellow for details
    });

    //writeFileAsync('profile.pdf', data)
  });
}
