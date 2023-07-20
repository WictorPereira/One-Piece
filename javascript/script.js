    //pegando todos elementos da classe pirata
    var piratas = document.querySelectorAll('.pirata')
    //fazendo um for para cada item da lista 
    piratas.forEach(pirata => {
    //fazendo um evendo de click 
    pirata.addEventListener('click', () => {
    //pegando oq esta dentro da classe selecionando e depois removendo oq tem na clase selecionado  e dps adicionado oq tem na classe  
     var pirataSelecionado = document.querySelector('.selecionado')    
     pirataSelecionado.classList.remove('selecionado')     
     pirata.classList.add('selecionado')
     
       
    // guardando a img que esta na classe pirata-grande em uma variável. depois pegando o valor do id que cada pirata tem. e por fim fazendo uma interpolação comando pirataGrande.src
    
     var pirataGrande = document.querySelector('.pirata-grande')     
     var idPirata = pirata.attributes.id.value     
     pirataGrande.src = `src/imagens/img-maior/${idPirata}.png` 
        
    // pegando o nome dos piratas e  depois modificando o texto que ira aparecer conforme o idpirata
     var nomePirata = document.getElementById('nome-pirata')
     nomePirata.innerText = idPirata

    //pegando oq tem dentro do id e guardando em uma variável. logo após isto modificando o texto com innertext com base no data-description que esta la no html.
     var descricaoPirata = document.getElementById('descricao-pirata')
     descricaoPirata.innerText = pirata.getAttribute('data-description')   
     
     
     
   })
})


