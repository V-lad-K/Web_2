var table = [
    {"username":"Ivan","password":"123","age":34},
    {"username":"Andriy","password":"124","age":38},
    {"username":"Petro","password":"125","age":44}
   ]

document.getElementById('content').innerHTML = '<table class="table"></table>'

console.log(table[0].username)
for(key in table){
    let row = document.createElement('tr')
    row.innerHTML = '<th>'+table[key].username+'</th>'+'<th>'+table[key].password+'</th>'+'<th>'+table[key].age+'</th>'
    document.querySelector('.table').appendChild(row)
}