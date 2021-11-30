const HBR = [{
        nome: "Gabriel Tijon da Silva",
        setor: 'Tecnologia',
        tel: '(11) 4880-8147',
        email: 'gabriel.silva@hbraviacao.com.br'
    },
    {
        nome: 'Caique Gonçalves',
        setor: 'tecnologia',
        tel: '(11) 4880-8147',
        email: 'caique.goncalves@hbraviacao.com.br'
    },
    {
        nome: 'Thamirys Gobbi',
        setor: 'tecnologia',
        tel: '(11) 4880-8147',
        email: 'thamirys.gobbi@hbraviacao.com.br'
    }

]
document.querySelector("#nome").innerHTML = HBR[0].nome
document.querySelector("#setor").innerHTML = HBR[0].setor
document.querySelector("#tel").innerHTML = HBR[0].tel
document.querySelector("#email").innerHTML = HBR[0].email