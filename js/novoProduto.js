function teste(){
    url = document.getElementById("url").value;
    categoria = document.getElementById("categoria").value;
    nome = document.getElementById("nome").value;
    preco = document.getElementById("preco").value;
    descricao = document.getElementById("descricao").value;

    let produto = new Produto(url, categoria, nome, preco, descricao);

    produtos.push(produto);

    localStorage.setItem('Lista de Produtos', JSON.stringify(produtos));

    alert("Produto adicionado!");

    location.reload();
}