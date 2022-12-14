class Produto{
    constructor(url, categoria, nome, preco, descricao){
        this.url = url;
        this.categoria = categoria;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    };

    url;
    categoria;
    nome;
    preco;
    descricao;
}

let p0 = new Produto("./imagens/starwars/1.png", "StarWars", "Caneca Stormtrooper", "R$ 29,99", "Descrição");
let p1 = new Produto("./imagens/starwars/2.png", "StarWars", "Lego Star Wars", "R$ 79,99", "Descrição");
let p2 = new Produto("./imagens/starwars/3.png", "StarWars", "Mestre Yoda Action Figure", "R$ 99,99", "Descrição");
let p3 = new Produto("./imagens/starwars/4.png", "StarWars", "Fantasia Stormtrooper", "R$ 499,99", "Descrição");
let p4 = new Produto("./imagens/starwars/5.png", "StarWars", "Boneco Baby Yoda", "R$ 129,99", "Descrição");
let p5 = new Produto("./imagens/starwars/6.png", "StarWars", "Kylo Ren Action Figure", "R$ 99,99", "Descrição");

let p6 = new Produto("./imagens/consoles/1.png", "Consoles", "Controle Xbox", "R$ 499,99", "Descrição");
let p7 = new Produto("./imagens/consoles/2.png", "Consoles", "PS5 Blue", "R$ 4.749,99", "Descrição");
let p8 = new Produto("./imagens/consoles/3.png", "Consoles", "NES", "R$ 999,99", "Descrição");
let p9 = new Produto("./imagens/consoles/4.png", "Consoles", "Joy Con Nintendo Switch", "R$ 499,99", "Descrição");
let p10= new Produto("./imagens/consoles/5.png", "Consoles", "Xbox Series X", "R$ 4.299,99", "Descrição");
let p11= new Produto("./imagens/consoles/6.png", "Consoles", "Game Boy Color", "R$ 499,99", "Descrição");

let p12= new Produto("./imagens/diversos/1.png", "Diversos", "Camisa Atari", "R$ 79,99", "Descrição");
let p13= new Produto("./imagens/diversos/2.png", "Diversos", "Camisa SNES", "R$ 99,99", "Descrição");
let p14= new Produto("./imagens/diversos/3.png", "Diversos", "Boneco Sonic", "R$ 79,99", "Descrição");
let p15= new Produto("./imagens/diversos/4.png", "Diversos", "Rádio Rosa", "R$ 499,99", "Descrição");
let p16= new Produto("./imagens/diversos/5.png", "Diversos", "PSVR", "R$ 2.499,99", "Descrição");
let p17= new Produto("./imagens/diversos/6.png", "Diversos", "Fantasia Pikachu", "R$ 349,99", "Descrição");

const base = [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17];

let produtos = [];
produtos = JSON.parse(localStorage.getItem('Lista de Produtos')) == null ? produtos = base : produtos = JSON.parse(localStorage.getItem('Lista de Produtos', produtos));
localStorage.setItem('Lista de Produtos', JSON.stringify(produtos)); 
