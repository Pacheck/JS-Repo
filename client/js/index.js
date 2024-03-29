let campos = [

    data = document.querySelector('#data'),
    quantidade = document.querySelector('#quantidade'),
    valor = document.querySelector('#valor') 
];

console.log(campos);

let tbody = document.querySelector('table tbody');

document.querySelector(".form").addEventListener('submit', function(event){

    event.preventDefault();

    var tr = document.createElement('tr');

    campos.forEach(function(campo){

        var td = document.createElement('td');
        td.textContent = campo.value;

        tr.appendChild(td);

    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[3].value = 0;

    campos[0].focus();

})