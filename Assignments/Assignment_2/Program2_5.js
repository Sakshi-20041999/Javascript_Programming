////////////////////////////////////////////////////////////////////
//
//  Program Name : Program2_5.js
//  Description  : Check whether number is even or odd
//  Input        : Integer
//  Output       : Even number / Odd number
//  Author       : Sakshi Santosh Jadhav
//  Date         : 10/12/2025
//
////////////////////////////////////////////////////////////////////

function ChkEven(iNo)
{
    if(iNo % 2 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let iValue = 10;
let bRet = false;

bRet = ChkEven(iValue);

if(bRet == true)
{
    console.log("Even number");
}
else
{
    console.log("Odd number");
}

////////////////////////////////////////////////////////////////////
//
//  Test Cases
//
//  Input  : 10
//  Output : Even number
//
//  Input  : 7
//  Output : Odd number
//
////////////////////////////////////////////////////////////////////
