var arr = [1, 3, 4, 1, 1, 5, 5,1,7];
var result = {};

for (var i = 0; i < arr.length; ++i){
    var a = arr[i];
    if (result[a] != undefined)
        ++result[a];
    else
        result[a] = 1;
}

var arr2 = []
for (var key in result)
console.log('число ' + key + ' == ' + result[key] + ' раз(а) ');