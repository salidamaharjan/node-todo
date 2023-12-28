import inquirer from "inquirer";
import fs from "fs";

async function todoList() {
  const savedList = await inquirer.prompt([
    {
      type: "list",
      name: "list",
      message: "Choose your option",
      choices: ["See List", "Add Task"],
    },
  ]);
  console.log(`${savedList.list}`);
  if (savedList.list === "See List") {
    fs.readFile("./todo.text", "utf-8", async (err, data) => {
      if (err) throw err;
      else if (data === "") {
        console.log("No stored data");
      } else {
        console.log("data: ", data);
      }  
      todoList();
    });
  } else if (savedList.list === "Add Task") {
    const todo = await inquirer.prompt([
        {
          name: "task",
          message: "Task to be Added",
        },
      ]);
      fs.appendFile("./todo.text", `${todo.task}\n`, (err) => {
        if (err) throw err;
        console.log("Task added");
        todoList();
      });
  }
}
todoList();
