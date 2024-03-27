#!/usr/bin/env node
import inquirer from 'inquirer';


inquirer.prompt([
    {
        type: 'input',
        name: 'num1',
        message: 'Hello user! Enter the first number:',
        validate: (input: string) => {
            if (!isNaN(parseFloat(input))) {
                return true;
            }
            return 'Please enter a valid number.';
        }
    },
    {
        type: 'input',
        name: 'num2',
        message: 'Hello user! Enter the second number:',
        validate: (input: string) => {
            if (!isNaN(parseFloat(input))) {
                return true;
            }
            return 'Please enter a valid number.';
        }
    },
    {
        type: 'list',
        name: 'operation',
        message: 'Select operation:',
        choices: ['Add', 'Subtract', 'Multiply', 'Divide']
    }
]).then(answers => {
    const num1: number = parseFloat(answers.num1);
    const num2: number = parseFloat(answers.num2);

    if (isNaN(num1) || isNaN(num2)) {
        console.log('Error: Invalid input. Please enter valid numbers.');
        return;
    }

    let result: number;
    if (answers.operation === 'Add') {
        result = num1 + num2;
    } else if (answers.operation === 'Subtract') {
        result = num1 - num2;
    } else if (answers.operation === 'Multiply') {
        result = num1 * num2;
    } else if (answers.operation === 'Divide') {
        if (num2 === 0) {
            console.log('Error: Cannot divide by zero.');
            return;
        }
        result = num1 / num2;
    } else {
        console.log('Error: Invalid operation.');
        return;
    }

    console.log(`Result: ${result}`);
}).catch(error => {
    console.log('Error:', error);
});