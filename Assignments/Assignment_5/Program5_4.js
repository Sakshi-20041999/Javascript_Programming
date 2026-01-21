////////////////////////////////////////////////////////////////////
//
//  Program Name : Program5_4.js
//  Description  : Check whether number is positive, negative or zero
//  Input        : Integer
//  Output       : Positive number / Negative number / Zero
//  Author       : Sakshi Santosh Jadhav
//  Date         : 10/12/2025
//
////////////////////////////////////////////////////////////////////

function CheckNumberType(num)
{
    if(num > 0)
    {
        console.log("Positive number");
    }
    else if(num < 0)
    {
        console.log("Negative number");
    }
    else
    {
        console.log("Zero");
    }
}

let number = -5;
CheckNumberType(number);

////////////////////////////////////////////////////////////////////
//
//  Test Cases
//
//  Input  : -5
//  Output : Negative number
//
//  Input  : 0
//  Output : Zero
//
//  Input  : 8
//  Output : Positive number
//
////////////////////////////////////////////////////////////////////
