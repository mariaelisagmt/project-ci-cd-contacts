class Contato {

    constructor(nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }

    showDetails() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Telefone: ${this.telefone}`);
        console.log(`E-mail: ${this.email}`);
        console.log('------------------------');
    }

}