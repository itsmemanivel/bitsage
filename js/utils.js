/* 
:::::::::
function definitions

*/

var splitNum = function(wholeNum, splits){
    var fractionArr = [];
    if( splits > wholeNum ){
        return;
    } else if( wholeNum % splits == 0 ){
        for( var n=0; n<splits; n++ ){
            var value = wholeNum/splits;
            fractionArr.push(value);
        }
    } else {
        var zp = splits - ( wholeNum % splits );
        var pp = wholeNum/splits;
        for( var n=0; n<splits; n++ ){
            if( n >= zp ){
                fractionArr.push(pp+1);
            } else {
                fractionArr.push(pp);
            }
        }
    }
    return fractionArr;
}