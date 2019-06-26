class NegociacaoController {

    constructor() {

    let $ = document.querySelector.bind(document);

       this._inputData = $('#data');
       this._inputQuantidade = $('#quantidade');
       this._inputValor = $('#valor');

    }

    adiciona(event) {
        
        event.preventDefault();

        let helper = new DateHelper();

        let negociacao = new Negociacao(
            helper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

        
        
        console.log(negociacao);    
        console.log(helper.dataParaTexto(negociacao.data));

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