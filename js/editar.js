let produto = produtos[JSON.parse(localStorage.getItem('Produto Editavel'))];
let numeroDoProduto = JSON.parse(localStorage.getItem('Produto Editavel'));
document.getElementById("url").value = produto.url;
document.getElementById("categoria").value = produto.categoria;
document.getElementById("nome").value = produto.nome;
document.getElementById("preco").value = produto.preco;
document.getElementById("descricao").value = produto.descricao;

function salvarProduto(){
    if(logado){
        url = document.getElementById("url").value;
        categoria = document.getElementById("categoria").value;
        nome = document.getElementById("nome").value;
        preco = document.getElementById("preco").value;
        descricao = document.getElementById("descricao").value;

        let produto_atualizado = new Produto(url, categoria, nome, preco, descricao);

        produtos[numeroDoProduto] = produto_atualizado;
        
        localStorage.setItem('Lista de Produtos', JSON.stringify(produtos));
        alert("Produto salvo!");

        window.location.replace('alurageek_produtos.html');
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
