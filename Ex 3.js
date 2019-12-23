function a(num){
    var strNum = String(num);
    for (var i = 0; i < strNum.length; i++) {
        if (strNum[i]%2==0) {
            return false;
        } 
    } 
    return true;
}

console.log (a(4211133));
