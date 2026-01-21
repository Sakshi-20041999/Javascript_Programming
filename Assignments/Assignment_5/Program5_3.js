////////////////////////////////////////////////////////////////////
//
//  Program Name : Program5_3.js
//  Description  : Check whether given year is leap year or not
//  Input        : Integer year
//  Output       : Leap Year / Not a Leap Year
//  Author       : Sakshi Santosh Jadhav
//  Date         : 10/12/2025
//
////////////////////////////////////////////////////////////////////

function CheckLeapYear(year)
{
    if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
    {
        console.log("Leap Year");
    }
    else
    {
        console.log("Not a Leap Year");
    }
}

let yr = 2024;
CheckLeapYear(yr);

////////////////////////////////////////////////////////////////////
//
//  Test Cases
//
//  Input  : 2024
//  Output : Leap Year
//
//  Input  : 2023
//  Output : Not a Leap Year
//
////////////////////////////////////////////////////////////////////
