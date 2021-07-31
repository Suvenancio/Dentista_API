module.exports = class Dentista {
    constructor(nome, email, cpf, CRO, especilidade){
        this.nome = nome;

        const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        if(email.match(regex)){
            this.email = email
        }else
        {
            console.log (" Email Inválido" )
        };

        const validaCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
        if(cpf.match(validaCpf)){
            this.cpf = cpf
        }else
        {
            console.log('CPF inválido')
        }
        
    
        this.CRO = CRO;
        this.especilidade = especilidade;

    }
}