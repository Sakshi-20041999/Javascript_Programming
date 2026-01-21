////////////////////////////////////////////////////////////////////
//
//  Program Name : Program4_3.js
//  Description  : Display all non-factors of a number
//  Input        : Integer
//  Output       : Non-factors of number
//  Author       : Sakshi Santosh Jadhav
//  Date         : 10/12/2025
//
////////////////////////////////////////////////////////////////////

function NonFact(iNo)
{
    let i = 0;

    if(iNo <= 0)
    {
        iNo = -iNo;
    }

    for(i = 1; i < iNo; i++)
    {
        if(iNo % i != 0)
        {
            process.stdout.write(i + " ");
        }
    }
}

let iValue = 12;
NonFact(iValue);

////////////////////////////////////////////////////////////////////
//
//  Test Cases
//
//  Input  : 12
//  Output : 5 7 8 9 10 11
//
//  Input  : 7
//  Output : 2 3 4 5 6
//
////////////////////////////////////////////////////////////////////
