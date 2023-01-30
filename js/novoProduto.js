function adicionarProduto(){
    if(logado){
        const url = document.getElementById("url").value;
        const categoria = document.getElementById("categoria").value;
        const nome = document.getElementById("nome").value;
        const preco = document.getElementById("preco").value;
        const descricao = document.getElementById("descricao").value;

        let produto = new Produto(url, categoria, nome, preco, descricao);

        produtos.push(produto);

        localStorage.setItem('Lista de Produtos', JSON.stringify(produtos));

        alert("Produto adicionado!");

        location.reload();
    }else{
        alert("Você precisa estar logado para adicionar um produto!");
    }
}

SimpleMaskMoney.setMask(document.getElementById("preco"), {
    allowNegative: false,
    prefix: 'R$ ',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    cursor: 'end'
})
document.getElementById("preco").blur();