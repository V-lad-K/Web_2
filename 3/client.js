$(document).ready(function(){
    function getUsers(){
        $.get('/getusers',function(data){
        createTable('table',data)
        })
        }
       
       
    getUsers();
})

   
function createTable(container, table){
    var data = JSON.parse(table)
    document.getElementById(container).innerHTML = '<table class="table"></table>'

    for(key in table){
        
        console.log(data[key].username)
        let row = document.createElement('tr')
        row.innerHTML = '<th style="background-color:red;">'+data[key].username+'</th>'+'<th style="background-color:blue;">'+data[key].password+'</th>'+'<th style="background-color:tomato;">'+data[key].age+'</th>'
        document.querySelector('.table').appendChild(row)
    }
}

