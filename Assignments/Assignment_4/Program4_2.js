////////////////////////////////////////////////////////////////////
//
//  Program Name : Program4_2.js
//  Description  : Display all factors of a number in reverse order
//  Input        : Integer
//  Output       : Factors in reverse order
//  Author       : Sakshi Santosh Jadhav
//  Date         : 10/12/2025
//
////////////////////////////////////////////////////////////////////

function FactRev(iNo)
{
    let i = 0;

    if(iNo <= 0)
    {
        iNo = -iNo;
    }

    for(i = Math.floor(iNo / 2); i >= 1; i--)
    {
        if(iNo % i == 0)
        {
            process.stdout.write(i + " ");
        }
    }
}

let iValue = 12;
FactRev(iValue);

////////////////////////////////////////////////////////////////////
//
//  Test Cases
//
//  Input  : 12
//  Output : 6 4 3 2 1
//
//  Input  : 10
//  Output : 5 2 1
//
////////////////////////////////////////////////////////////////////
