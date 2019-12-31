function myFunction2(x, y) {
        var exist = 1;
        var firstNum = x
        var lastNum = y
        for (i = firstNum; i <= lastNum; i++) {
            if (i % 2 == 0) {
                exist = 1
                var first = String(i).charAt(0);
                if (first % 2 == 0) {
                    console.log(i)
                }
            } else {
                exist = 0
            }
        }
        if (exist == 0) {
            console.log('Such values do not exist')
        }
    }
    myFunction2(19, 42)