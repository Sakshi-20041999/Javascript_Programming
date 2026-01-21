////////////////////////////////////////////////////////////////////
//
//  Program Name : Program2_2.js
//  Description  : Display * pattern using decrement loop
//  Input        : Integer
//  Output       : * * * * *
//  Author       : Sakshi Santosh Jadhav
//  Date         : 10/12/2025
//
////////////////////////////////////////////////////////////////////

function Display(iNo)
{
    while(iNo > 0)
    {
        process.stdout.write("* ");
        iNo--;
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
//  Input  : 2
//  Output : * *
//
////////////////////////////////////////////////////////////////////
 