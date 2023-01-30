produto_escolhido = JSON.parse(localStorage.getItem('Produto Escolhido', produtos));

function montaProduto(produto){
    document.querySelector(".produto__imagem").src = produto.url;
    document.querySelector(".produto__nome").innerHTML = produto.nome;
    document.querySelector(".produto__valor").innerHTML = produto.preco;
    document.querySelector(".produto__descricao").innerHTML = produto.descricao;
    montaSimilares(produto.categoria);
}

function montaSimilares(categoria_lista){
    let c = 0;
    let n2;
    const produtos__similares = [];

    for(i = 0; i < produtos.length; i++){
        if(produtos[i].categoria == categoria_lista && i != produto_escolhido){
            document.getElementById("similares").innerHTML += `<div class="secao__unidade" id=${i} onclick="escolher(this.id)"><img class="secao__unidade--imagem" src="${produtos[i].url}" alt="Imagem do Produto"><span class="secao__unidade--nome">${produtos[i].nome}</span><span class="secao__unidade--valor">${produtos[i].preco}</span></div>`;
            produtos__similares.push(i);
            c++;
        }
    }

    for(c; c < 6;){
        n2 = Math.floor(Math.random()*produtos.length);
        
        if(produtos[n2].categoria != categoria_lista && !produtos__similares.includes(n2)){
            document.getElementById("similares").innerHTML += `<div class="secao__unidade" id=${n2} onclick="escolher(this.id)"><img class="secao__unidade--imagem" src="${produtos[n2].url}" alt="Imagem do Produto"><span class="secao__unidade--nome">${produtos[n2].nome}</span><span class="secao__unidade--valor">${produtos[n2].preco}</span></div>`;
            produtos__similares.push(n2);
            c++;
        }
    }
}

function escolher(produto){
    localStorage.setItem('Produto Escolhido', JSON.stringify(produto));
    window.open('alurageek_produto.html', '_blank');
}

montaProduto(produtos[produto_escolhido]);
document.title = `${produtos[produto_escolhido].nome} - Alura Geek`;