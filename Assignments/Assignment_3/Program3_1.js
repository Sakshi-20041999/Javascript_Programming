////////////////////////////////////////////////////////////////////
//
//  Program Name : Program3_1.js
//  Description  : Display first N even numbers
//  Input        : Integer
//  Output       : Even number series
//  Author       : Sakshi Santosh Jadhav
//  Date         : 10/12/2025
//
////////////////////////////////////////////////////////////////////

function PrintEven(iNo)
{
    if(iNo <= 0)
    {
        return;
    }

    let i = 1;
    let count = 0;

    while(count < iNo)
    {
        process.stdout.write((i * 2) + " ");
        i++;
        count++;
    }
}

let iValue = 7;
PrintEven(iValue);

////////////////////////////////////////////////////////////////////
//
//  Test Cases
//
//  Input  : 7
//  Output : 2 4 6 8 10 12 14
//
//  Input  : 3
//  Output : 2 4 6
//
////////////////////////////////////////////////////////////////////
