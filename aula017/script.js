function tabuada(){
    let num = document.getElementById('txtn')
    let select = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('Digite Um Numero')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while( c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.oppendChild(item)
            c++
        }

    }


}