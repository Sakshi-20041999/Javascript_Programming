////////////////////////////////////////////////////////////////////
//
//  Program Name : Program1_4.js
//  Description  : Check whether number is divisible by 5
//  Input        : Integer
//  Output       : Divisible by 5 / Not Divisible by 5
//  Author       : Sakshi Santosh Jadhav
//  Date         : 10/12/2025
//
////////////////////////////////////////////////////////////////////

function Check(iNo)
{
    if((iNo % 5) == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let iValue = 10;
let bRet = false;

bRet = Check(iValue);

if(bRet == true)
{
    console.log("Divisible by 5");
}
else
{
    console.log("Not Divisible by 5");
}

////////////////////////////////////////////////////////////////////
//
//  Test Cases
//
//  Input  : 10
//  Output : Divisible by 5
//
//  Input  : 13
//  Output : Not Divisible by 5
//
////////////////////////////////////////////////////////////////////
