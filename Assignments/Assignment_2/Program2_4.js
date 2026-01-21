////////////////////////////////////////////////////////////////////
//
//  Program Name : Program2_4.js
//  Description  : Display given number iFrequency times
//  Input        : Integer, Integer
//  Output       : Repeated number
//  Author       : Sakshi Santosh Jadhav
//  Date         : 10/12/2025
//
////////////////////////////////////////////////////////////////////

function Display(iNo, iFrequency)
{
    let i = 0;

    if(iFrequency < 0)
    {
        iFrequency = -iFrequency;
    }

    for(i = 1; i <= iFrequency; i++)
    {
        process.stdout.write(iNo + " ");
    }
}

let iValue = 12;
let iCount = 5;

Display(iValue, iCount);

////////////////////////////////////////////////////////////////////
//
//  Test Cases
//
//  Input  : 12, 5
//  Output : 12 12 12 12 12
//
//  Input  : 7, -3
//  Output : 7 7 7
//
////////////////////////////////////////////////////////////////////
