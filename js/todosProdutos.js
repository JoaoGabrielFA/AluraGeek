function montaProdutos(){
    for(i = 0; i < produtos.length; i++){
        document.getElementById("produtos").innerHTML += `<div class="secao__unidade" id=${i} onclick="escolher(this.id)"><img class="secao__unidade--imagem" src="${produtos[i].url}" alt="Imagem do Produto"><span class="secao__unidade--nome">${produtos[i].nome}</span><span class="secao__unidade--valor">${produtos[i].preco}</span><img class="secao__unidade--editar" src="./imagens/icons/editar.png" id=${i} onclick="editar(this.id)"><img class="secao__unidade--deletar" src="./imagens/icons/deletar.png" id=${i} onclick="deletar(this.id)" ></div>`;
    }
}

montaProdutos();

function escolher(produto){
    localStorage.setItem('Produto Escolhido', JSON.stringify(produto));
    window.open('alurageek_produto.html', '_blank');
}

function deletar(produto){
    if(confirm(`Você deseja deletar ${produtos[produto].nome}?`)){
        produtos.splice(produto, 1);
        localStorage.setItem('Lista de Produtos', JSON.stringify(produtos));
        location.reload();
    }
}

function editar(produto){
    if(confirm(`Você deseja editar ${produtos[produto].nome}?`)){
        localStorage.setItem('Produto Editavel', JSON.stringify(produto));
        window.open('alurageek_editar.html', '_self');
    }
}

