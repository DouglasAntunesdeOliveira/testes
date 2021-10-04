function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("Erro - Favor verificar seus dados")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement(`img`)
        img.setAttribute('id', 'foto')
        if(fsex [0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 14){
                //criança
                img.setAttribute('src','homem-crianca.png')
            } else if (idade > 18 && idade < 29){
                //jovem
                img.setAttribute('src','homem-jovem.png')
            } else if (idade > 30 && idade < 59){
                //adulto
                img.setAttribute('src','homem-adulto.png')
            } else if (idade > 60){
                //idoso
                img.setAttribute('src','homem-idoso.png')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 14){
                //criança
                img.setAttribute('src','mulher-crianca.png')
            } else if (idade > 15 && idade < 29){
                //jovem
                img.setAttribute('src','mulher-jovem.png')
            } else if (idade > 30  && idade < 59){
                //adulta
                img.setAttribute('src','mulher-adulta.png')
            } else if (idade > 60)
            //idosa
                img.setAttribute('src','mulher-idosa.png')
        }
        res.innerHTML = `Sua idade é ${idade} e seu gênero é ${gênero}`
        res.appendChild(img)
        
    }
}
