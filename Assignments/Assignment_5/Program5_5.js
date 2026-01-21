////////////////////////////////////////////////////////////////////
//
//  Program Name : Program5_5.js
//  Description  : Find largest of three numbers
//  Input        : Three integers
//  Output       : Largest number
//  Author       : Sakshi Santosh Jadhav
//  Date         : 10/12/2025
//
////////////////////////////////////////////////////////////////////

function FindLargest(x, y, z)
{
    if(x >= y && x >= z)
    {
        return x;
    }
    else if(y >= x && y >= z)
    {
        return y;
    }
    else
    {
        return z;
    }
}

let a = 10;
let b = 25;
let c = 15;
let result = 0;

result = FindLargest(a, b, c);
console.log("Largest number is:", result);

////////////////////////////////////////////////////////////////////
//
//  Test Cases
//
//  Input  : 10, 25, 15
//  Output : Largest number is: 25
//
//  Input  : 5, 3, 1
//  Output : Largest number is: 5
//
////////////////////////////////////////////////////////////////////
