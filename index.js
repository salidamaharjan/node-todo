import inquirer from "inquirer";
import fs from 'fs';
async function name() {
  const answer = await inquirer.prompt([
    {
      name: "name",
      message: "What is your name?",
    },
    {
      name: "work",
      message: "What do you do?",
    }
  ]);
  console.log(`
  Hello! ${answer.name}. 
  You are a ${answer.work}.`
  );
  fs.appendFile('./message.txt.', `${answer.name}:${answer.work}`, (err) => {
    if (err) throw err;
    console.log("logged");
  })
}
name();


