function insertionSort(a){
    var n = a.length;
    for (var i=0; i<n; i++){ 
        var v = a[i], j = i-1; 
        while(j >= 0 && a[j] > v){ 
            a[j+1] = a[j]; 
            j--; 
        }
        a[j+1] = v; 
    }
    return a;
};

let array = [85, 92, 12, 11, 0, 85, 1, 1, 20, 77, 01, 10.5, 10.15];

console.log(insertionSort(array));