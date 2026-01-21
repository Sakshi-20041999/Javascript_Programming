////////////////////////////////////////////////////////////////////
//
//  Program Name : Program4_1.js
//  Description  : Multiply all factors of a number
//  Input        : Integer
//  Output       : Integer product of factors
//  Author       : Sakshi Santosh Jadhav
//  Date         : 10/12/2025
//
////////////////////////////////////////////////////////////////////

function MultFact(iNo)
{
    let i = 0;
    let iMult = 1;

    if(iNo <= 0)
    {
        iNo = -iNo;
    }

    for(i = 1; i <= iNo; i++)
    {
        if(iNo % i == 0)
        {
            iMult = iMult * i;
        }
    }

    return iMult;
}

let iValue = 12;
let iRet = 0;

iRet = MultFact(iValue);
console.log(iRet);

////////////////////////////////////////////////////////////////////
//
//  Test Cases
//
//  Input  : 12
//  Output : 20736
//
//  Input  : 6
//  Output : 36
//
////////////////////////////////////////////////////////////////////
