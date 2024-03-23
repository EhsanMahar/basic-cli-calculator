#! /usr/bin/env node

import inquirer from "inquirer";

const ans=await inquirer.prompt([
{message:"enter the  your number",type:"number",name:"firstnumber"},
{message:"enter the your number",type:"number",name:"secondnumber"},
{message:"select an operator to perform an operation",type:"list",name:"operator",choices:["addition","subtraction","multiplication","division"]},

]);

if(ans.operator==="addition"){
    console.log(ans.firstnumber+ans.secondnumber);
    
}
else if(ans.operator==="subtraction"){
    console.log(ans.firstnumber-ans.secondnumber);
}
else if(ans.operator==="multiplication"){
    console.log(ans.firstnumber*ans.secondnumber);
}
else if(ans.operator==="division"){
    console.log(ans.firstnumber/ans.secondnumber);
}