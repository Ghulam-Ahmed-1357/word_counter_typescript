#! /usr/bin/env node
import inquirer from "inquirer"

const answer: {
    Sentence: string
} = await inquirer.prompt([
    {
        type: "input",
        name: "Sentence",
        message: "Enter your sentence you want to count it's words"
    }
])
const words = answer.Sentence.trim().split(" ")  // word is of array type , 
// trim() method remove whitespaces from beginning and end of the sentence (but not remove spaces in between words)
// split() method split the sentence into words as i provided the (" ") space in double quotes, if i not provide the space it will split sentence into characters

console.log(words)

console.log(`Your sentence contains ${words.length} words`);
