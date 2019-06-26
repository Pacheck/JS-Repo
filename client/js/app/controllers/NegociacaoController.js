class NegociacaoController {

    constructor() {

    let $ = document.querySelector.bind(document);

       this._inputData = $('#data');
       this._inputQuantidade = $('#quantidade');
       this._inputValor = $('#valor');

    }

    adiciona(event) {
        
        event.preventDefault();

        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

        
        
        console.log(negociacao);    
        console.log(DateHelper.dataParaTexto(negociacao.data));

    }

} // Fim NegociacaoController


class PessoaController {

    constructor() {

        this._nome = prompt('Digite seu primeiro nome');
        this._sobrenome = prompt('Digite seu segundo nome');
    }

    click(event){

        event.preventDefault();

        let pessoa = new Pessoa(
            this._nome,
            this._sobrenome
        );
        console.log(pessoa);
    }
}