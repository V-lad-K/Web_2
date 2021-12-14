var tree = {
    value: "0",
    left: {
        value: '1',
        left: {
            value: '3',
        },
        right: {
            value: '4',
            left: {
                value: '6',
            },
            right: {
                value: '7',
            }
        }
    },
    right: {
        value: '2',
        left: {
            value: '5',
        },
        right: {
            value: '8',
        }
    }
}

let result = [];
let dfs = function (node) {
    if(node) {
        result.push(node.value);
        dfs(node.left);
        dfs(node.right);
    }
}
 
dfs(tree);
console.log(result); 