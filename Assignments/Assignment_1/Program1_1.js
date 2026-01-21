////////////////////////////////////////////////////////////////////
//
//  Program Name : Program1_1.js
//  Description  : Divide two numbers and return result
//  Input        : Integer, Integer
//  Output       : Integer / -1 if division by zero
//  Author       : Sakshi Santosh Jadhav
//  Date         : 10/12/2025
//
////////////////////////////////////////////////////////////////////

function Divide(iNo1, iNo2)
{
    let iAns = 0;

    if(iNo2 == 0)
    {
        return -1;
    }

    iAns = iNo1 / iNo2;
    return iAns;
}

let iValue1 = 15, iValue2 = 5;
let iRet = 0;

iRet = Divide(iValue1, iValue2);
console.log("Division is " + iRet);

////////////////////////////////////////////////////////////////////
//
//  Test Cases
//
//  Input  : 15, 5
//  Output : Division is 3
//
//  Input  : 10, 0
//  Output : Division is -1
//
////////////////////////////////////////////////////////////////////
