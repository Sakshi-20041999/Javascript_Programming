////////////////////////////////////////////////////////////////////
//
//  Program Name : Program4_5.js
//  Description  : Return difference between sum of factors and non-factors
//  Input        : Integer
//  Output       : Integer difference
//  Author       : Sakshi Santosh Jadhav
//  Date         : 10/12/2025
//
////////////////////////////////////////////////////////////////////

function FactDiff(iNo)
{
    let i = 0;
    let iSumFact = 0;
    let iSumNonFact = 0;

    if(iNo <= 0)
    {
        iNo = -iNo;
    }

    for(i = 1; i < iNo; i++)
    {
        if(iNo % i == 0)
        {
            iSumFact = iSumFact + i;
        }
        else
        {
            iSumNonFact = iSumNonFact + i;
        }
    }

    return (iSumFact - iSumNonFact);
}

let iValue = 12;
let iRet = 0;

iRet = FactDiff(iValue);
console.log(iRet);

////////////////////////////////////////////////////////////////////
//
//  Test Cases
//
//  Input  : 12
//  Output : -34
//
//  Input  : 6
//  Output : -2
//
////////////////////////////////////////////////////////////////////
