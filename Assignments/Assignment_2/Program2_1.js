////////////////////////////////////////////////////////////////////
//
//  Program Name : Program_2_1.js
//  Description  : Display * pattern using counter variable
//  Input        : Integer
//  Output       : * * * * *
//  Author       : Sakshi Santosh Jadhav
//  Date         : 10/12/2025
//
////////////////////////////////////////////////////////////////////

function Display(iNo)
{
    let iCnt = 0;

    while(iCnt < iNo)
    {
        process.stdout.write("* ");
        iCnt++;
    }
}

let iValue = 5;
Display(iValue);

////////////////////////////////////////////////////////////////////
//
//  Test Cases
//
//  Input  : 5
//  Output : * * * * *
//
//  Input  : 3
//  Output : * * *
//
////////////////////////////////////////////////////////////////////
