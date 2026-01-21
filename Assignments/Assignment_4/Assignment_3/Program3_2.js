////////////////////////////////////////////////////////////////////
//
//  Program Name : Program3_2.js
//  Description  : Display all factors of a number
//  Input        : Integer
//  Output       : Factors of number
//  Author       : Sakshi Santosh Jadhav
//  Date         : 10/12/2025
//
////////////////////////////////////////////////////////////////////

function DisplayFactor(iNo)
{
    let i = 0;

    if(iNo <= 0)
    {
        iNo = -iNo;
    }

    for(i = 1; i <= iNo; i++)
    {
        if(iNo % i == 0)
        {
            process.stdout.write(i + " ");
        }
    }
}

let iValue = 24;
DisplayFactor(iValue);

////////////////////////////////////////////////////////////////////
//
//  Test Cases
//
//  Input  : 24
//  Output : 1 2 3 4 6 8 12 24
//
//  Input  : 10
//  Output : 1 2 5 10
//
////////////////////////////////////////////////////////////////////
