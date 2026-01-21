////////////////////////////////////////////////////////////////////
//
//  Program Name : Program3_5.js
//  Description  : Check whether given character is vowel or not
//  Input        : Character
//  Output       : It is Vowel / It is not Vowel
//  Author       : Sakshi Santosh Jadhav
//  Date         : 10/12/2025
//
////////////////////////////////////////////////////////////////////

function ChkVowel(cValue)
{
    cValue = cValue.toLowerCase();

    if(cValue == 'a' || cValue == 'e' || cValue == 'i' || 
       cValue == 'o' || cValue == 'u')
    {
        return true;
    }
    else
    {
        return false;
    }
}

let cValue = 'e';
let bRet = false;

bRet = ChkVowel(cValue);

if(bRet == true)
{
    console.log("It is Vowel");
}
else
{
    console.log("It is not Vowel");
}

////////////////////////////////////////////////////////////////////
//
//  Test Cases
//
//  Input  : 'e'
//  Output : It is Vowel
//
//  Input  : 'z'
//  Output : It is not Vowel
//
////////////////////////////////////////////////////////////////////
