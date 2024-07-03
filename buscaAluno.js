document.addEventListener('DOMContentLoaded', function() {
    // URL da API
    const apiUrl = 'http://localhost:8080/alunos';

    // Fazendo a chamada GET para a API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na rede: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Sucesso:', data);

            const tbody = document.getElementById('studentTableBody');

            data.forEach(aluno => {
                const tr = document.createElement('tr');

                const numeroMatricula = document.createElement('td');
                numeroMatricula.textContent = aluno.id;
                tr.appendChild(numeroMatricula);

                const nome = document.createElement('td');
                nome.textContent = aluno.nome;
                tr.appendChild(nome);

                const idade = document.createElement('td');
                idade.textContent = aluno.idade;
                tr.appendChild(idade);

                const cpf = document.createElement('td');
                cpf.textContent = aluno.cpf;
                tr.appendChild(cpf);

                const telefone = document.createElement('td');
                telefone.textContent = aluno.telefone;
                tr.appendChild(telefone);

                const turma = document.createElement('td');
                turma.textContent = aluno.turma;
                tr.appendChild(turma);

                const endereco = document.createElement('td');
                if(aluno.endereco) {
                    endereco.textContent = `${aluno.endereco?.cidade} | ${aluno.endereco?.estado}`;
                }
                tr.appendChild(endereco);

                const acoes = document.createElement('td');

                const button = document.createElement('button');
                button.textContent = 'Editar';
                button.addEventListener('click', () => {
                    alert('Ação clicada para ' + aluno.nome);
                });

                // Adicionando o botão ao td
                acoes.appendChild(button);

                tr.appendChild(acoes);

                tbody.appendChild(tr);
                
            });
        })
        .catch(error => {
            console.error('Erro:', error);
            // Exibindo a mensagem de erro na página
            const dadosDiv = document.getElementById('dados');
            dadosDiv.textContent = 'Erro ao carregar os dados da API: ' + error.message;
        });
});
