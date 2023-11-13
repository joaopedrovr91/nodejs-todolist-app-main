class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarTabelaAtendimentos();
    }

    criarTabelaAtendimentos() {
        const sql = `
        CREATE TABLE IF NOT EXISTS atendimentos (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            DATA DATE,
            servico VARCHAR(100),
            cliente VARCHAR(100),
            STATUS ENUM("ativo", "realizado", "cancelado") DEFAULT "ativo"
        );`;
            this.conexao.query(sql, (erro) => {
                if(erro) {
                    console.log("eita deu erro, tabela de atendimento");
                    console.log(erro.message);
                    return;
                } 
                console.log("Tabela atendimentos criada com sucesso");
            });
    }
}

module.exports = new Tabelas();