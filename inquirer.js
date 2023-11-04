"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const ans = inquirer_1.default.prompt([
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
