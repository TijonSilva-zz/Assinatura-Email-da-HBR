const HBR = [
    {
        nome: 'gabriel tijon',
        cargo: 'tecnologia',
        tel: '(11) 4880-8147'
    },
    {
        nome: 'caique gonsalves',
        cargo: 'tecnologia',
        tel: '(11) 4880-8147'
    },
    {
        nome: 'thamires gobli',
        cargo: 'tecnologia',
        tel: '(11) 4880-8147'
    }

]

function gerar(){
    let nomes = [
     "Diego",
     "Gabriel",
      "Lucas"
    ];
    
    let lista = document.getElementById('lista');
    for(let i = 0; i < nomes.length; i++){
        let item = document.createElement('h1');
        item.(document.createTextNode(nomes[0]));
        lista.addEventListener(item);
    }
}