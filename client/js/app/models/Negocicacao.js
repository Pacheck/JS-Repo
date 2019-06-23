
class Negociacao {

    constructor(data, quantidade, valor){

        this._data = new Date(data.getTime()); // usa o valor da referencia 'hoje' para criar um novo VALOR baseado nele
        this._quantidade = quantidade;
        this._valor = valor;
        
        Object.freeze(this);
    }

    get volume(){

        return this._quantidade * this._valor;
    }

    get data(){

        return new Date(this._data.getTime());
    }

    get quantidade(){

        return this._quantidade;
    }

    get valor(){

        return this._valor;
    }
}








class Pessoa {

    constructor(nome, sobrenome) {

        this.nome = nome;
        this.sobrenome = sobrenome;

    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

}
