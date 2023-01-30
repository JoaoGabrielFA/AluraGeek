function montaLista(categoria_lista){
    for(i = 0; i < produtos.length; i++){
        if(produtos[i].categoria == categoria_lista){
            document.getElementById(categoria_lista).innerHTML += `<div class="secao__unidade" id=${i} onclick="escolher(this.id)"><img class="secao__unidade--imagem" src="${produtos[i].url}" alt="Imagem do Produto"><span class="secao__unidade--nome">${produtos[i].nome}</span><span class="secao__unidade--valor">${produtos[i].preco}</span></div>`;
            if(document.querySelectorAll('#' + categoria_lista + '>*').length == 6){break;}
        }
    }
}

function abre(){
    window.open("http://127.0.0.1:5500/alurageek_login.html", "_self");
}

function escolher(produto){
    localStorage.setItem('Produto Escolhido', JSON.stringify(produto));
    window.open("alurageek_produto.html", "_blank");
}

montaLista("StarWars");
montaLista("Consoles");
montaLista("Diversos");