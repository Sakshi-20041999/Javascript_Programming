////////////////////////////////////////////////////////////////////
//
//  Program Name : Program_2_3.js
//  Description  : Display Hello if number < 10 else display Demo
//  Input        : Integer
//  Output       : Hello / Demo
//  Author       : Sakshi Santosh Jadhav
//  Date         : 10/12/2025
//
////////////////////////////////////////////////////////////////////

function Display(iNo)
{
    if(iNo < 10)
    {
        console.log("Hello");
    }
    else
    {
        console.log("Demo");
    }
}

let iValue = 8;
Display(iValue);

////////////////////////////////////////////////////////////////////
//
//  Test Cases
//
//  Input  : 8
//  Output : Hello
//
//  Input  : 12
//  Output : Demo
//
////////////////////////////////////////////////////////////////////
