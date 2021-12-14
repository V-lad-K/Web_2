function getRandomInt(number) {
    return Math.floor(Math.random() * number);
}
var number = ""
for(i=0; i<16; i++){
    number+=getRandomInt(9)
}
console.log(number);