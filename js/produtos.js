const starwars = [
    produto1 = {
        nome: "Caneca Stormtrooper",
        valor: "R$ 29,99",
        imagem: "./imagens/starwars/1.png"
    },
    produto2 = {
        nome: "Lego Star Wars",
        valor: "R$ 79,99",
        imagem: "./imagens/starwars/2.png"
    },
    produto3 = {
        nome: "Mestre Yoda Action Figure",
        valor: "R$ 99,99",
        imagem: "./imagens/starwars/3.png"
    },
    produto4 = {
        nome: "Fantasia Stormtrooper",
        valor: "R$ 499,99",
        imagem: "./imagens/starwars/4.png"
    },
    produto5 = {
        nome: "Boneco Baby Yoda",
        valor: "R$ 129,99",
        imagem: "./imagens/starwars/5.png"
    },
    produto6 = {
        nome: "Kylo Ren Action Figure",
        valor: "R$ 99,99",
        imagem: "./imagens/starwars/6.png"
    }
];

const consoles = [
    produto1 = {
        nome: "Controle Xbox",
        valor: "R$ 509,99",
        imagem: "./imagens/consoles/1.png"
    },
    produto2 = {
        nome: "Ps5 Blue",
        valor: "R$ 4.749,99",
        imagem: "./imagens/consoles/2.png"
    },
    produto3 = {
        nome: "NES",
        valor: "R$ 999,99",
        imagem: "./imagens/consoles/3.png"
    },
    produto4 = {
        nome: "Joy Con Nintendo Switch",
        valor: "R$ 499,99",
        imagem: "./imagens/consoles/4.png"
    },
    produto5 = {
        nome: "Xbox Series X",
        valor: "R$ 4.299,99",
        imagem: "./imagens/consoles/5.png"
    },
    produto6 = {
        nome: "Game Boy Color",
        valor: "R$ 499,99",
        imagem: "./imagens/consoles/6.png"
    }
];

const diversos = [
    produto1 = {
        nome: "Camisa Atari",
        valor: "R$ 79,99",
        imagem: "./imagens/diversos/1.png"
    },
    produto2 = {
        nome: "Camisa SNES",
        valor: "R$ 99,99",
        imagem: "./imagens/diversos/2.png"
    },
    produto3 = {
        nome: "Boneco Sonic",
        valor: "R$ 79,99",
        imagem: "./imagens/diversos/3.png"
    },
    produto4 = {
        nome: "Rádio Rosa",
        valor: "R$ 499,99",
        imagem: "./imagens/diversos/4.png"
    },
    produto5 = {
        nome: "PSVR",
        valor: "R$ 2.499,99",
        imagem: "./imagens/diversos/5.png"
    },
    produto6 = {
        nome: "Fantasia Pikachu",
        valor: "R$ 349,99",
        imagem: "./imagens/diversos/6.png"
    }
];

function montaLista(){
    for(i = 0; i < starwars.length; i++){
        document.getElementById("StarWars").innerHTML += `<div class="secao__unidade"><img class="secao__unidade--imagem" src="${starwars[i].imagem}" alt="Imagem do Produto"><span class="secao__unidade--nome">${starwars[i].nome}</span><span class="secao__unidade--valor">${starwars[i].valor}</span><span class="secao__unidade--mais">Ver Produto</span></div>`
    }
}

function montaLista2(){
    for(i = 0; i < consoles.length; i++){
        document.getElementById("Consoles").innerHTML += `<div class="secao__unidade"><img class="secao__unidade--imagem" src="${consoles[i].imagem}" alt="Imagem do Produto"><span class="secao__unidade--nome">${consoles[i].nome}</span><span class="secao__unidade--valor">${consoles[i].valor}</span><span class="secao__unidade--mais">Ver Produto</span></div>`
    }
}

function montaLista3(){
    for(i = 0; i < diversos.length; i++){
        document.getElementById("Diversos").innerHTML += `<div class="secao__unidade"><img class="secao__unidade--imagem" src="${diversos[i].imagem}" alt="Imagem do Produto"><span class="secao__unidade--nome">${diversos[i].nome}</span><span class="secao__unidade--valor">${diversos[i].valor}</span><span class="secao__unidade--mais">Ver Produto</span></div>`
    }
}

montaLista();
montaLista2();
montaLista3();