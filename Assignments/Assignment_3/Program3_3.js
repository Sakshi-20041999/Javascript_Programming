////////////////////////////////////////////////////////////////////
//
//  Program Name : Program3_3.js
//  Description  : Display even factors of a number
//  Input        : Integer
//  Output       : Even factors only
//  Author       : Sakshi Santosh Jadhav
//  Date         : 10/12/2025
//
////////////////////////////////////////////////////////////////////

function DisplayEvenFactor(iNo)
{
    let i = 0;

    if(iNo <= 0)
    {
        iNo = -iNo;
    }

    for(i = 1; i <= iNo; i++)
    {
        if((iNo % i == 0) && (i % 2 == 0))
        {
            process.stdout.write(i + " ");
        }
    }
}

let iValue = 36;
DisplayEvenFactor(iValue);

////////////////////////////////////////////////////////////////////
//
//  Test Cases
//
//  Input  : 36
//  Output : 2 4 6 12 18 36
//
//  Input  : 15
//  Output : (No output)
//
////////////////////////////////////////////////////////////////////
