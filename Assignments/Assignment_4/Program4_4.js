////////////////////////////////////////////////////////////////////
//
//  Program Name : Program4_4.js
//  Description  : Calculate sum of all non-factors of a number
//  Input        : Integer
//  Output       : Integer sum
//  Author       : Sakshi Santosh Jadhav
//  Date         : 10/12/2025
//
////////////////////////////////////////////////////////////////////

function SumNonFact(iNo)
{
    let i = 0;
    let iSum = 0;

    if(iNo <= 0)
    {
        iNo = -iNo;
    }

    for(i = 1; i < iNo; i++)
    {
        if(iNo % i != 0)
        {
            iSum = iSum + i;
        }
    }

    return iSum;
}

let iValue = 12;
let iRet = 0;

iRet = SumNonFact(iValue);
console.log(iRet);

////////////////////////////////////////////////////////////////////
//
//  Test Cases
//
//  Input  : 12
//  Output : 50
//
//  Input  : 6
//  Output : 8
//
////////////////////////////////////////////////////////////////////
