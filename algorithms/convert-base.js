function Convert() {
    
    var alph = ['e','f','7','E','F','G','0','1','8','9','t','u','v','g','h','i','O','P','5','6','w','x','y','z','A','B','4','H','I','J','K','L','C','D','2','3','M','a','b','V','W','T','U','m','n','o','X','Y','Z','j','k','l','c','d','Q','R','S','p','q','r','s','N'];
    
    //not used
    this.toInt = function(sixtyTwoBase) {
        var tenBase = 0;
        
        sixtyTwoBase.split('').reverse().forEach(function(digit, index) {
            tenBase += alph.indexOf(digit) * Math.pow(62, index);
        });
        
        return tenBase;
    };
    
    this.toSixtyTwo = function(num) {
        var digits = [];
        while(num >= 1){
            digits.push(num % 62);
            num = Math.floor(num/62);
        }
        digits = digits.map(dig => alph[dig]).reverse().join('');
        
        return digits;
    }
}

module.exports = new Convert();
