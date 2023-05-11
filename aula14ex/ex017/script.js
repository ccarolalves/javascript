function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Por Favor, digite um número')
    }else{
        let n = Number(num.value)
        let c =1
        tab.innerHTML = '' //limpa o forms
        while (c<=10){
            let item = document.createElement('option')//criação de uma opção no formulário
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab$(c)`
            tab.appendChild(item)
            c++
        }
    }
}