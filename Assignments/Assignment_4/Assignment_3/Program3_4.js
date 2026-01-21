////////////////////////////////////////////////////////////////////
//
//  Program Name : Program3_4.js
//  Description  : Convert small letter to capital and capital to small
//  Input        : Character
//  Output       : Converted character
//  Author       : Sakshi Santosh Jadhav
//  Date         : 10/12/2025
//
////////////////////////////////////////////////////////////////////

function DisplayConvert(cValue)
{
    if(cValue >= 'a' && cValue <= 'z')
    {
        console.log(cValue.toUpperCase());
    }
    else if(cValue >= 'A' && cValue <= 'Z')
    {
        console.log(cValue.toLowerCase());
    }
}

let cValue = 'a';
DisplayConvert(cValue);

////////////////////////////////////////////////////////////////////
//
//  Test Cases
//
//  Input  : 'a'
//  Output : A
//
//  Input  : 'M'
//  Output : m
//
////////////////////////////////////////////////////////////////////
