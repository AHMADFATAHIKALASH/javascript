function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    

    if (fano.value.length == 0 || Number(fano.value) > ano){
       window.alert('[ERRO]')
   
       
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked){
            genero = 'Homem'
            if ( idade >=0 && idade <10 ){
                //crinça
                img.setAttribute('src', 'crinca-homem.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-homem.png')
            }else if( idade >= 21 && idade < 50 ){
                //adulto

            }else{
                //idoso
                img.setAttribute('src', 'idoso-homem.png')
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            if ( idade >=0 && idade <10 ){
                //criança
                img.setAttribute('src', 'crinca-mulher.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-mulher.png')
            }else if( idade >= 21 && idade < 50 ){
                //adulto
            }else{
                //idoso
                img.setAttribute('src', 'idoso-mulher.png')
            }
        }
        res.innerHTML(`Detectamos ${genero} com ${idade} Anos`)
        res.appendChild(img)
            
    } 
    
    }
        

