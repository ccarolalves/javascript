/*function fatorial(n){
    let fat =1
    for(let c = n; c>1; c--){
    fat = fat*c
    }
    return fat
}
*/
//RECURSIVIDADE:
function fatorial(n){
    if(n==1){
        return 1
    }else{
        return n*fatorial(n-1)
    }
}

console.log(fatorial(4))