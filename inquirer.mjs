import inquirer from 'inquirer';
const ans = await inquirer.prompt([
    {
        type: "input",
        name: "data",
        message: "please enter your data",
    },
    {
        type: "number",
        name: "age",
        message: "please enter your age",
    },
    {
        type: "list",
        name: "gender",
        message: "please enter your  gender",
        choices: ["male", "female", "prefer not to say"],
    }
]);
