str1 = "qwerty"
str2 = "222"

function splitIndex(value, index, str) {
    return value.substring(0, index) + str + value.substring(index);
}

var rez = splitIndex(str1, 3, str2);
console.log(rez);