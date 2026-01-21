////////////////////////////////////////////////////////////////////
//
//  Program Name : Program5_2.js
//  Description  : Find maximum of two numbers
//  Input        : Two integers
//  Output       : Maximum number
//  Author       : Sakshi Santosh Jadhav
//  Date         : 10/12/2025
//
////////////////////////////////////////////////////////////////////

function FindMax(a, b)
{
    if(a > b)
    {
        return a;
    }
    else
    {
        return b;
    }
}

let num1 = 10;
let num2 = 20;
let result = 0;

result = FindMax(num1, num2);
console.log("Maximum is:", result);

////////////////////////////////////////////////////////////////////
//
//  Test Cases
//
//  Input  : 10, 20
//  Output : Maximum is: 20
//
//  Input  : 50, 25
//  Output : Maximum is: 50
//
////////////////////////////////////////////////////////////////////
