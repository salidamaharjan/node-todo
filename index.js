import inquirer from "inquirer";
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
  You are a  ${answer.work}`
  );
}
name();
