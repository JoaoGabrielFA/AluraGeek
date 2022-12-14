function montaLista(categoria_lista){
    for(i = 0; i < produtos.length; i++){
        if(produtos[i].categoria == categoria_lista){
            document.getElementById(categoria_lista).innerHTML += `<div class="secao__unidade"><img class="secao__unidade--imagem" src="${produtos[i].url}" alt="Imagem do Produto"><span class="secao__unidade--nome">${produtos[i].nome}</span><span class="secao__unidade--valor">${produtos[i].preco}</span><span class="secao__unidade--mais">Ver Produto</span></div>`
        }
    }
}

montaLista("StarWars");
montaLista("Consoles");
montaLista("Diversos");