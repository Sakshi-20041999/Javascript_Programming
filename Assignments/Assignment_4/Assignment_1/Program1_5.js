////////////////////////////////////////////////////////////////////
//
//  Program Name : Program1_5.js
//  Description  : Display * pattern based on input
//  Input        : Integer
//  Output       : * * * * *
//  Author       : Sakshi Santosh Jadhav
//  Date         : 10/12/2025
//
////////////////////////////////////////////////////////////////////

function Accept(iNo)
{
    for(let iCnt = 1; iCnt <= iNo; iCnt++)
    {
        process.stdout.write("*");
    }
}

let iValue = 5;
Accept(iValue);

////////////////////////////////////////////////////////////////////
//
//  Test Cases
//
//  Input  : 5
//  Output : *****
//
//  Input  : 3
//  Output : ***
//
////////////////////////////////////////////////////////////////////
